//获取选择框
/**
 * 移动不保留原来位置上的东西
 *
 * @param domName 第几道题 
 * @param checkBox 需要添加的dom
 * @param mobileClass 需要移动的dom
 * 
 */


var newdomName = null //是否是同一题

function getDrag(domName,checkBox,mobileClass) {
  // console.log('111')
  newdomName = domName
  if (newdomName != domName) return
  var checkBox = document.getElementsByClassName(checkBox) //获取上面需要填写的div
  var mobileBox = document.getElementsByClassName(mobileClass) //下面需要拖拽的div
  var scope = [] //放置位置的列表
  var activeBox = null 
  var activeBoxX = 0 //移动dom的x
  var activeBoxY = 0 //移动dom的y
  var removeBox = null
  var removeBoxX = 0
  var removeBoxY = 0
  var locat = null
  var x1 = null
  var y1 = null


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

//判断你是在哪个框里面
function findBox(target) {
  // console.log(getIndex(target.parentNode) - 1)
  return getIndex(target.parentNode) - 1
}


  var scopeInfoArr = getScope();
  window.onresize = function(){
    scopeInfoArr = getScope();
  }

  function getScope() { //放置位置的列表
    scope = []
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
  
  for( var i = 0; i< mobileBox.length; i++) {    //鼠标按下
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
                  activeBox.target.style.cssText = 'display:none'
                  var clonedNode = activeBox.target.cloneNode(true);
                  clonedNode.classList.remove(mobileClass)
                  if(domName == 'u6-zs1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/zsOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 86%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-zs2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/zsTwo"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 86%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-cm2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmTwo"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-cm4') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmFour"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiOne/csOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 62%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u10-zs1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen//unitTen/zsOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 100%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u13-cm6') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitThirt/cmSix"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 100%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs2-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qOne"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 100%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs2-cm9') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qNine"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 62%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs2-cm11') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qEle"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u16-cm2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSixte/qTwo"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u16-cm5') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSixte/qFive"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u23-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitTwtyT/cmOne"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 79%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u23-cm3') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitTwtyT/cmThree"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 58%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
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
                  clonedNode.classList.remove(mobileClass)
                  if(domName == 'u6-zs1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/zsOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 86%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-zs2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/zsTwo"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 86%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-cm2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmTwo"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u6-cm4') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmFour"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiOne/csOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 62%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u10-zs1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen//unitTen/zsOne"+getIndex(e.target)+".png');background-repeat: no-repeat;background-size: cover;width: 100%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u13-cm6') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitThirt/cmSix"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 100%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs2-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qOne"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 90%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs2-cm9') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qNine"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 62%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs2-cm11') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qEle"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u16-cm2') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSixte/qTwo"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u16-cm5') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitSixte/qFive"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u23-cm1') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitTwtyT/cmOne"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 79%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u23-cm3') {
                    clonedNode.style.cssText = "background-image: url('./images/commen/unitTwtyT/cmThree"+getIndex(activeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 58%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
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
                      clonedNode.classList.remove(mobileClass)
                      if(domName == 'u6-zs1') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/zsOne"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 86%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u6-zs2') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/zsTwo"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 86%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u6-cm1') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmOne"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u6-cm2') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmTwo"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u6-cm4') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSix/cmFour"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'cs-cm1') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/ceshiOne/csOne"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 77%;height: 62%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u10-zs1') {
                        clonedNode.style.cssText = "background-image: url('./images/commen//unitTen/zsOne"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 100%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u13-cm6') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitThirt/cmSix"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 90%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'cs2-cm9') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qNine"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 62%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'cs2-cm11') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/ceshiTwo/qEle"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u16-cm2') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSixte/qTwo"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u16-cm5') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitSixte/qFive"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 57%;height: 51%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u23-cm1') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitTwtyT/cmOne"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 79%;height: 42%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                      } else if (domName == 'u23-cm3') {
                        clonedNode.style.cssText = "background-image: url('./images/commen/unitTwtyT/cmThree"+getPicInTopBox(removeBox.target)+".png');background-repeat: no-repeat;background-size: cover;width: 58%;height: 60%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
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

