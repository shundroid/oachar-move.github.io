document.addEventListener("DOMContentLoaded", function() {
  var oacm = document.getElementById("oacm");
  oacm.style.width = "100%";
  oacm.style.position = "relative";
  oacm.style.overflow = "hidden";
  oacm.style.height = "64px";
  var img = document.createElement("img");
  img.src = "anigif.gif";
  img.height = 64;
  img.style.position = "absolute";
  var imgLeft = 0;
  img.onload = function() {
    oacm.appendChild(img);
    setInterval(function() {
      img.style.left = imgLeft === 0 ? "0" : imgLeft.toString() + "px";
      if (imgLeft >= oacm.offsetWidth) {
        imgLeft = -64;
      } else {
        imgLeft += 2;
      }
    }, 10);
  }
});