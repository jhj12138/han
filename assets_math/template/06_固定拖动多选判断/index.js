var moveBox = document.getElementsByClassName('move_box') //需要移动的dom
var placeBox = document.getElementsByClassName('main_top')[0] //拖拽范围的方框

var scope = [] //拖拽方框的范围
var moveBoxPlace = [] //移动dom的位置
var oldLocation = [] //原来需要移动的位置
var activeBox = null 
var activeBoxX = 0 //移动dom的x
var activeBoxY = 0 //移动dom的y


for( var i = 0; i< moveBox.length; i++) {
  moveBox[i].addEventListener('mousedown', function(e) {
    activeBox = e
    activeBoxX = e.clientX - e.target.offsetLeft
    activeBoxY = e.clientY - e.target.offsetTop
    // oldLocation.splice(i,0,{
    //   originalX: e.target.offsetLeft,
    //   originalY: e.target.offsetTop
    // })
    // console.log('oldLocation',oldLocation);
    
    var originalX = e.target.offsetLeft
    var originalY = e.target.offsetTop
    scope.push({
      x1: placeBox.offsetLeft,
      x2: placeBox.offsetLeft + placeBox.offsetWidth,
      y1: placeBox.offsetTop,
      y2: placeBox.offsetTop + placeBox.offsetHeight,
    })
    document.addEventListener('mousemove', function(e) {
      e.preventDefault()
      if (activeBox) {
        activeBox.target.style.cssText = 'left: ' + (e.clientX - activeBoxX) + 'px;top:' + (e.clientY - activeBoxY) + 'px'
      }
    })
    document.addEventListener('mouseup', function(e) {
      if(!activeBox) return;
      var x1 = e.target.offsetLeft + e.target.offsetWidth / 2
      var y1 = e.target.offsetTop + e.target.offsetHeight / 2
      for (var k = 0; k < scope.length; k++) {
        if (x1 >= scope[k].x1 && y1 >= scope[k].y1 && x1 <= scope[k].x2 && y1 <=scope[k].y2) {
        } else {
          activeBox.target.style.cssText = 'left: ' + originalX + 'px;top:' + originalY + 'px;'
        }
      }
      activeBox = null
    })
  })
}
function submit() {
  for (var i = 0; i < moveBox.length; i++) {

    // if (x1 >= scope[0].x1 && y1 >= scope[0].y1 && x1 <= scope[0].x2 && y1 <=scope[0].y2) {
    //   console.log(e.target)
    // }
    // moveBoxPlace.push[]
  }
}