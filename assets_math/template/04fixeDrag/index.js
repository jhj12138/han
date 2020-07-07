//获取选择框
var checkBox = document.getElementsByClassName('check_box') //获取上面需要填写的div
var mobileBox = document.getElementsByClassName('mobile_box') //下面需要拖拽的div

var activeBox = null 
var activeBoxX = 0 //移动dom的x
var activeBoxY = 0 //移动dom的y
var removeBox = null
var removeBoxX = 0
var removeBoxY = 0
var locat = null
var x1 = null
var y1 = null





function getDrag(domName) {

  function getIndex(el){ //获取到下面需要拖拽div的index
    if (!el) {
        return -1
    }
    let index = 0
    do {
        index++
    } while (el = el.previousElementSibling);
    console.log(index)
    return index
  }
  //判断你是在哪个框里面
  function findBox(target) {
    return getIndex(target.parentNode) - 1
  }

  var scopeInfoArr = getScope();
  window.onresize = function(){
    scopeInfoArr = getScope();
  }

  function getScope() { //放置位置的列表
    var scope = []
    for (var j = 0; j < checkBox.length; j++) {
      // 需要填写的div的范围
      scope.push({
        x1: checkBox[j].offsetLeft,
        x2: checkBox[j].offsetLeft + checkBox[j].offsetWidth,
        y1: checkBox[j].offsetTop,
        y2: checkBox[j].offsetTop + checkBox[j].offsetHeight,
      })
    }
    return scope
  }
  
  // console.log(scopeInfoArr)
  for( var i = 0; i< mobileBox.length; i++) {
    //鼠标按下
    mobileBox[i].addEventListener('mousedown', function(e) {
      activeBox = e
      activeBoxX = e.clientX - e.target.offsetLeft //计算出main_content到可视区域的左边
      activeBoxY = e.clientY - e.target.offsetTop  //计算出main_content到可视区域的top
  
      // 元素原来的位置
      var originalX = e.target.offsetLeft
      var originalY = e.target.offsetTop
      locat = scopeInfoArr;
      // 鼠标移动
      document.addEventListener('mousemove', function(e) {
        e.preventDefault()
        if (activeBox) {
          activeBox.target.style.cssText = 'left: ' + (e.clientX - activeBoxX) + 'px;top:' + (e.clientY - activeBoxY) + 'px'  //相对与main_content的定位
        }
      })
      document.addEventListener('mouseup', function(e) {
        if(!activeBox) return;
        x1 = e.target.offsetLeft + e.target.offsetWidth/2
        y1 = e.target.offsetTop + e.target.offsetHeight/2
        var count = 0;
        for (var k = 0; k < locat.length; k++) {
          if (x1 >= locat[k].x1 && y1 >= locat[k].y1 && x1 <= locat[k].x2 && y1 <=locat[k].y2) {
            if(count === 0){
              if (checkBox[k] != undefined){
                if (!checkBox[k].children.length) {
                  e.target.style.cssText = 'display:none'
                  var clonedNode = e.target.cloneNode(true);
                  clonedNode.classList.remove('mobile_box')
                  clonedNode.classList.add('mobile_boxs')
                  if(domName == 'u1-zs3') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitOne/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 47%;height: 32%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                  } else if (domName == 'u2-zs2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitTwo/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 80%;height: 80%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                  } else if (domName == 'u3-zs2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitThree/zs-two-top/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 61%;height: 56%;position: absolute;left: 50%; top: 43%; transform: translate(-50%, -50%)"
                  } else if (domName == 'u3-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitThree/cm-one-top/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 107%;height: 64%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                  }
                  checkBox[k].appendChild(clonedNode)
                  test()
                } else {
                  for (var j = 0 ; j < mobileBox.length; j++) {
                    if (checkBox[k].firstChild.style.backgroundImage.replace(/[^0-9]/ig,"")-1 == j) {
                      mobileBox[j].style.cssText = "display:block"
                    }
                  }
                  checkBox[k].removeChild(checkBox[k].firstChild)
                  var clonedNode = e.target.cloneNode(true);
                  clonedNode.classList.remove('mobile_box')
                  clonedNode.classList.add('mobile_boxs')
                  if(domName == 'u1-zs3') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitOne/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 47%;height: 32%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                  } else if (domName == 'u2-zs2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitTwo/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 80%;height: 80%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                  } else if (domName == 'u3-zs2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitThree/zs-two-top/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 61%;height: 56%;position: absolute;left: 50%; top: 43%; transform: translate(-50%, -50%)"
                  } else if (domName == 'u3-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitThree/cm-one-top/"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 107%;height: 64%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                  }
                  checkBox[k].appendChild(clonedNode)
                  test()
                }
              }
              // checkBox[k].contains[mobileBox[0]]
              activeBox.target.style.cssText = 'left: ' + originalX + 'px;top:' + originalY + 'px;' + 'display:none'
              count ++
            }
          } 
        }
        if(count === 0) {
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
  
  
  
  var boxIndex = null ;
  function test(){
    for( var i =0; i < checkBox.length; i++) {
      if(checkBox[i].getElementsByTagName("*").length && checkBox[i].children) {
        addEventHandler(checkBox[i].firstChild,"mousedown",mousedownCb);
          function mousedownCb(e) {
            e.preventDefault()
            locat = scopeInfoArr //上面四个盒子位置信息
            removeBox = e
            boxIndex = findBox(removeBox.target)
            activeBoxX = e.clientX - e.target.offsetLeft //计算出main_content到可视区域的左边
            activeBoxY = e.clientY - e.target.offsetTop  //计算出main_content到可视区域的top
            document.addEventListener('mousemove', function(e) {
              e.preventDefault()
              if (removeBox) {
                removeBox.target.style.left = (e.clientX - activeBoxX) + 'px'
                removeBox.target.style.top = (e.clientY - activeBoxY) + 'px'
              }
            })
            document.addEventListener('mouseup', function(e) {
              e.preventDefault()
              if(!removeBox) return;
              removeBoxX = locat[boxIndex].x1 + removeBox.target.offsetLeft 
              removeBoxY = locat[boxIndex].y1 + removeBox.target.offsetTop
              x1 =  removeBoxX  //中心点x
              y1 = removeBoxY  //中心点y
              //是否在原来的框中
              if ( x1 >= locat[boxIndex].x1 && y1 >= locat[boxIndex].y1 && x1 <= locat[boxIndex].x2 && y1 <=locat[boxIndex].y2) {
                removeBox.target.style.left = '50%'
                removeBox.target.style.top = '50%'
              } else {
                var flag = true;
                for (var i = 0; i <locat.length; i++) {
                  if(x1 >= locat[i].x1 && y1 >= locat[i].y1 && x1 <= locat[i].x2 && y1 <=locat[i].y2) {
                    if(checkBox[i].firstChild) { //目标box有东西进行替换
                      
                      var clonedNode1 = removeBox.target.cloneNode(true)
                      var clonedNode2 = checkBox[i].firstChild.cloneNode(true)
                      clonedNode1.style.left = '50%'
                      clonedNode1.style.top = '50%'
                      clonedNode2.style.left = '50%'
                      clonedNode2.style.top = '50%'
                      var srcBox = findBox(removeBox.target)
                      removeBox.target.parentNode && removeBox.target.parentNode.removeChild(removeBox.target)
                      checkBox[i].removeChild(checkBox[i].firstChild)
                      checkBox[i].appendChild(clonedNode1)
                      checkBox[srcBox].appendChild(clonedNode2)
                    }else{
                      var clonedNode = removeBox.target.cloneNode(true);
                      clonedNode.classList.remove('mobile_box')
                      if(domName == 'u1-zs3') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitOne/"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 47%;height: 32%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                      } else if (domName == 'u2-zs2') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitTwo/"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 80%;height: 80%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                      } else if (domName == 'u3-zs2') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitThree/zs-two-top/"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 61%;height: 56%;position: absolute;left: 50%; top: 43%; transform: translate(-50%, -50%)"
                      } else if (domName == 'u3-cm1') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitThree/cm-one-top/"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 107%;height: 64%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%)"
                      }
                      checkBox[i].appendChild(clonedNode)
                      removeBox.target.parentNode && removeBox.target.parentNode.removeChild(removeBox.target)
                    }
                    flag = false;
                    test()
                    x1 = 0
                    y1 = 0
                    removeBox = null
                    break;
                  }
                }
                // 回到原来的点
                if(flag === false) return;
                for( var j = 0; j < mobileBox.length; j++) {
                  if (removeBox.target.style.backgroundImage.replace(/[^0-9]/ig,"")-1 == j) {
                    removeBox.target.parentNode && removeBox.target.parentNode.removeChild(removeBox.target)
                    mobileBox[j].style.cssText = "display:block"
                  }
                }
              }
    
              
              x1 = 0
              y1 = 0
              removeBox = null
            })
          }
      }
    }
  }
  test();

  // activeBox = null
  // activeBoxX = 0 //移动dom的x
  // activeBoxY = 0 //移动dom的y
  // scope = [] //放置位置的列表
  // removeBox = null
  // removeBoxX = 0
  // removeBoxY = 0

  // locat = null
  // x1 = null
  // y1 = null
}

//判断框里面的图片
function getPicInTopBox(target) {
  return target.style.backgroundImage.replace(/[^0-9]/ig,"")
}

//给父元素的每个子元素绑定事件
function addEventHandler(elm,eventType,handler){
  elm=typeof elm=="string"?document.getElementById(elm):elm;
  if(elm.attachEvent){
    elm.attachEvent("on"+eventType,handler);
  }else if(elm.addEventListener){
    elm.addEventListener(eventType,handler,false);
  }else 
    return false;
}
// 提交答案
// function submit() {
//   var checkList = []
//   for (var i = 0; i < checkBox.length; i ++) {
//     if(checkBox[i].children[0]) {
//       checkList.push(checkBox[i].children[0].dataset.list)
//     }
//   }
//   if ( checkList.toString() == data.toString()) {
//     alert('你全选对了')
//   } else {
//     alert('你选错了')
//   }
// }



