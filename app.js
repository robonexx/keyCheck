// add event listener and function for keypress
const showKey = document.querySelector('#showKey')

document.addEventListener("keydown", function(e) {
  
  // to see the event target in the console
    console.log(e);
  // not shown on screen

  

  // writing out the keycode and key on screen
showKey.innerHTML = `
    <div class="keycodes">
    &nbsp;
    <b>keyCode&nbsp;:</b>&nbsp;${e.keyCode}
    &nbsp;
    <b>key&nbsp;:</b>&nbsp;${e.key}
    &nbsp;&nbsp;
    <b>Code&nbsp;:</b>&nbsp;${e.code}
    </div>
    
    </div>
    &nbsp;
    <i>Shift&nbsp;:&nbsp;${e.shiftKey}</i>
    &nbsp;
    <i>Ctrl&nbsp;:&nbsp;${e.ctrlKey}</i>
    &nbsp;
    <i>Alt&nbsp;:&nbsp;${e.altKey}</i>
    </div>
  `;
  
});