var moveBox = document.getElementsByClassName('move_box') //需要移动的dom
var checkBox = document.getElementsByClassName('checkbox') //需要添加的dom
var firstInputs = document.getElementsByClassName('first_inputs')[0] //第一个input框的值
var secondInputs = document.getElementsByClassName('second_inputs')[0] //第二个input框的值
var threeInputs = document.getElementsByClassName('three_inputs')[0] //第三个input框的值
var fourthInputs = document.getElementsByClassName('fourth_inputs')[0] //第四个input框的值

var activeBox = null 
var activeBoxX = 0 //移动dom的x
var activeBoxY = 0 //移动dom的y
var scope = [] //放置位置的列表
var removeBox = null
var removeBoxX = 0
var removeBoxY = 0

function getIndex(el){ //获取到下面需要拖拽div的index
  if (!el) {
      return -1
  }
  let index = 0
  do {
      index++
  } while (el = el.previousElementSibling);
  return index
}

for( var i = 0; i< moveBox.length; i++) {
  moveBox[i].addEventListener('mousedown', function(e) {
    activeBox = e
    activeBoxX = e.clientX - e.target.offsetLeft
    activeBoxY = e.clientY - e.target.offsetTop

    var originalX = e.target.offsetLeft
    var originalY = e.target.offsetTop

    for (var j = 0; j < checkBox.length; j++) {
      // console.log('123==',checkBox[j].offsetLeft)
      // 需要填写的div的范围
      scope.push({
        x1: checkBox[j].offsetLeft,
        x2: checkBox[j].offsetLeft + checkBox[j].offsetWidth,
        y1: checkBox[j].offsetTop,
        y2: checkBox[j].offsetTop + checkBox[j].offsetHeight,
      })
    }

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
      let count = 0;
      for (var k = 0; k < scope.length-1; k++) {
        if (x1 >= scope[k].x1 && y1 >= scope[k].y1 && x1 <= scope[k].x2 && y1 <=scope[k].y2) {
          if(count === 0){
            var clonedNode = e.target.cloneNode(true);
            clonedNode.classList.remove('move_box')
            e.target.style.cssText = 'display:block' 
            clonedNode.style.cssText = "background-image: url('./images/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 3vw;height: 3vw;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
            // console.log('checkBox[k]',checkBox[k]);
            if ( checkBox[k] ){
              if( checkBox[k].firstChild) {
                checkBox[k].firstChild.remove()
                checkBox[k].appendChild(clonedNode)
              } else {
                checkBox[k].appendChild(clonedNode)
              }
            } 
            test()
          }
        }
      }
      if(activeBox) {
        activeBox.target.style.cssText = 'left: ' + originalX + 'px;top:' + originalY + 'px;'
      }
      x1 = 0
      x2 = 0
      y1 = 0
      y2 = 0
      activeBox = null
      originalX = ''
      originalY = ''
      activeBoxIndex = ''
    })
  })
}

function test(){
  for( var i =0; i < checkBox.length; i++) {
    if(checkBox[i].getElementsByTagName("*").length && checkBox[i].firstChild) {
      checkBox[i].firstChild.addEventListener('mousedown', function(e) {
        removeBox = e
        removeBoxX = e.clientX - e.target.offsetLeft
        removeBoxY = e.clientY - e.target.offsetTop
        document.addEventListener('mousemove', function(e) {
          e.preventDefault()
          if (removeBox) {
            removeBox.target.style.left = (e.clientX - removeBoxX) + 'px'
            removeBox.target.style.top = (e.clientY - removeBoxY) + 'px'
          }
        })
        document.addEventListener('mouseup', function(e) {
          if(!removeBox) return; 
          var x1 = e.target.offsetLeft + e.target.offsetWidth / 2
          var y1 = e.target.offsetTop + e.target.offsetHeight / 2
          let count = 0;
          for (var k = 0; k < scope.length; k++) {
            if (x1 >= scope[k].x1 && y1 >= scope[k].y1 && x1 <= scope[k].x2 && y1 <=scope[k].y2) {
              if(count === 0){
                removeBox.target.style.left = '50%'
                removeBox.target.style.top = '50%'
              }
            } else {
              removeBox.target.remove()
            }
          }
        })
      })
    }
  }
}

test()

function submit() {
  var  checkResult = []
  var contains = 0 //是否正确
  checkResult[0] = firstInputs.value
  checkResult[2] = secondInputs.value
  checkResult[4] = threeInputs.value
  checkResult[5] = fourthInputs.value
  for (var i = 0; i < checkBox.length; i ++) {
    if(checkBox[i].children[0]) {
      checkResult[1] = checkBox[0].children[0].dataset.list
      checkResult[3] = checkBox[1].children[0].dataset.list
    }
  }
  // console.log(checkResult);
  for ( var j = 0; j < data.length; j++) {
    if(checkResult.toString() == data[j].toString()) {
      contains ++
      break
    }
  }
  if (contains) {
    alert('你全都打对了')
  } else {
    alert('你答错了')
  }
}