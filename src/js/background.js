function ourLog(value, err=false){
  const ourConsole = document.getElementById('console');
  if (err) {
    ourConsole.innerHTML = ourConsole.innerHTML + (value + '<br>');
  } else {
    ourConsole.innerHTML = ourConsole.innerHTML + (JSON.stringify(value) + '<br>');
  }
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
    ourLog(`<span class="red">Error: ${e.message}</span>`, true);
}
}
document.getElementById("code-pane").value = window.localStorage.getItem('codeSave');
document.getElementById("runButton").addEventListener("click", runCode);
document.getElementById("code-pane").addEventListener("change", () => {
  window.localStorage.setItem('codeSave', document.getElementById('code-pane').value);
});
