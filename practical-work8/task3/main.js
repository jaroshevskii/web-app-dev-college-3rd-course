// Crutch.

function setPageStyle() {
  var element = document.getElementById("navigation");
  element.classList.remove("navigation-mobile", "navigation-tablet", "navigation-desktop");
  
  if (document.body.clientWidth <= 425) {
    element.classList.add("navigation-mobile");
  } else if (document.body.clientWidth <= 768) {
    element.classList.add("navigation-tablet");
  } else {
    element.classList.add("navigation-desktop");
  }
}

setPageStyle();
window.addEventListener('resize', setPageStyle);