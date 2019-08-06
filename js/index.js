/**
 * f12 , ctrl +shift +i 막는 스크립트
 */
function KeyEventHandle () {
  if (
    (event.ctrlKey === true &&
      (event.keyCode === 16 || event.keyCode === 73)) ||
    (event.keyCode >= 112 && event.keyCode <= 123)
  ) {
    event.keyCode = 0
    event.cancelBubble = true
    event.returnValue = false
  }
}
document.onkeydown = KeyEventHandle
document.onkeyup = KeyEventHandle

var faded = false

window.addEventListener(
  'scroll',
  function (event) {
    if (window.scrollY > 60 && !faded) {
      $('nav').css({ position: 'fixed' })
      $('nav')
        .hide()
        .fadeIn(500)
      faded = true
    } else if (window.scrollY === 0 && faded) {
      $('nav').css({ position: 'static' })
      faded = false
    }
  },
  true
)
