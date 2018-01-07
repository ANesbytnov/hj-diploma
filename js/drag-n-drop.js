var drag = document.getElementsByClassName('drag')[0];
var dragMenu = document.getElementsByClassName('menu')[0];

drag.onmousedown = function(e) {

  var coords = getCoords(dragMenu);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  dragMenu.style.position = 'absolute';
  document.body.appendChild(dragMenu);
  moveAt(e);

  dragMenu.style.zIndex = 1000; 

  function moveAt(e) {
    dragMenu.style.left = e.pageX - shiftX + 'px';
    dragMenu.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  drag.onmouseup = function() {
    document.onmousemove = null;
    drag.onmouseup = null;
    dragMenu.onmousemove = null;
  };

}

dragMenu.ondragstart = function() {
  return false;
};

function getCoords(elem) {   
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
