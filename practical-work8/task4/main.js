// Crutch.

function setPageStyle() {
  var element = document.getElementById("main");
  element.classList.remove("mobile", "tablet");
  
  if (document.body.clientWidth <= 425) {
    element.classList.add("mobile");
  } else if (document.body.clientWidth <= 768) {
    element.classList.add("tablet");
  }
}

setPageStyle();
window.addEventListener('resize', setPageStyle);