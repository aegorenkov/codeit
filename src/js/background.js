function ourLog(...args){
  const ourConsole = document.getElementById('console');
  // if (err) {
  //   ourConsole.innerHTML = ourConsole.innerHTML + (args.join('') + '<br>');
  // } else {
    console.log(args);
    ourConsole.innerHTML = ourConsole.innerHTML + (args.map((v) => JSON.stringify(v)).join('') + '<br>');
  // }
}
function errorLog(value) {
  const ourConsole = document.getElementById('console');
  ourConsole.innerHTML = ourConsole.innerHTML + (value + '<br>');
}
function runCode(e) {
  const ourConsole = document.getElementById('console');
  ourConsole.innerHTML = '';

  let codeToRun = document.getElementById("code-pane").value;
  codeToRun = codeToRun.replace(/console.log/g,'ourLog');
  try {
    eval(codeToRun);
  } catch (e) {
    // Make sure we can put errors on console as well
    errorLog(`<span class="red">Error: ${e.message}</span>`);
}
}
document.getElementById("code-pane").value = window.localStorage.getItem('codeSave');
document.getElementById("runButton").addEventListener("click", runCode);
document.getElementById("code-pane").addEventListener("change", () => {
  window.localStorage.setItem('codeSave', document.getElementById('code-pane').value);
});
