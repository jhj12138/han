//获取选择框
/**
 * 移动不保留原来位置上的东西
 *
 * @param domName 第几道题 
 * @param checkBoxt 需要添加的dom
 * @param mobileClass 需要移动的dom
 * 
 */


var newdomName = null //是否是同一题

function newDrag(domName,checkBoxt,mobileClass) {
  // console.log('111')
  newdomName = domName
  if (newdomName != domName) return
  var checkBoxt = document.getElementsByClassName(checkBoxt) //获取上面需要填写的div
  var mobileBoxt = document.getElementsByClassName(mobileClass) //下面需要拖拽的div
  var scopet = [] //放置位置的列表
  var activeBoxt = null 
  var activeBoxXt = 0 //移动dom的x
  var activeBoxYt = 0 //移动dom的y
  var removeBoxt = null
  var removeBoxXt = 0
  var removeBoxYt = 0
  var locatt = null
  var x1t = null
  var y1t = null


function getIndext(el){ //获取到下面需要拖拽div的index
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
function findBoxt(target) {
  // console.log(getIndext(target.parentNode) - 1)
  return getIndext(target.parentNode) - 1
}


  var scopetInfoArrt = getscopet();
  window.onresize = function(){
    scopetInfoArrt = getscopet();
  }

  function getscopet() { //放置位置的列表
    scopet = []
    for (var j = 0; j < checkBoxt.length; j++) {
      // 需要填写的div的范围
      scopet.push({
        x1t: checkBoxt[j].offsetLeft,
        x2: checkBoxt[j].offsetLeft + checkBoxt[j].offsetWidth,
        y1t: checkBoxt[j].offsetTop,
        y2: checkBoxt[j].offsetTop + checkBoxt[j].offsetHeight,
      })
    }
    return scopet
  }
  
  for( var i = 0; i< mobileBoxt.length; i++) {    //鼠标按下
    mobileBoxt[i].addEventListener('mousedown', function(e) {
      activeBoxt = e
      activeBoxXt = e.clientX - e.target.offsetLeft //计算出main_content到可视区域的左边
      activeBoxYt = e.clientY - e.target.offsetTop  //计算出main_content到可视区域的top
  
      // 元素原来的位置
      var originalX = e.target.offsetLeft
      var originalY = e.target.offsetTop
      locatt = scopetInfoArrt;
      // 鼠标移动
      document.addEventListener('mousemove', function(e) {
        e.preventDefault()
        if (activeBoxt) {
          activeBoxt.target.style.cssText = 'left: ' + (e.clientX - activeBoxXt) + 'px;top:' + (e.clientY - activeBoxYt) + 'px'  //相对与main_content的定位
        }
      })
      document.addEventListener('mouseup', function(e) {
        if(!activeBoxt) return;
        x1t = e.target.offsetLeft + e.target.offsetWidth/2
        y1t = e.target.offsetTop + e.target.offsetHeight/2
        var count = 0;
        for (var k = 0; k < locatt.length; k++) {
          if (x1t >= locatt[k].x1t && y1t >= locatt[k].y1t && x1t <= locatt[k].x2 && y1t <=locatt[k].y2) {
            if(count === 0){
              activeBoxt.target.style.cssText = 'display:none'
              var clonedNode = activeBoxt.target.cloneNode(true);
              clonedNode.classList.remove(mobileClass);
              if (domName == 'u10-cm2'){
                clonedNode.style.cssText = "background-image: url('./images/commen/unitTen/cmTwo"+getIndext(activeBoxt.target)+".png');background-repeat: no-repeat;background-size: cover;left:50% ;top: 46%;position: absolute;width: 41%; height: 19%;transform: translate(-50%, -50%);background-position:center"
              } else if(domName == 'u8-zs3') {
                clonedNode.style.cssText = "background-image: url('./images/commen/unitEight/zsThree"+getIndext(activeBoxt.target)+".png');background-repeat: no-repeat;background-size: cover;left:50% ;top: 46%;position: absolute;width: 43%; height: 41%;transform: translate(-50%, -50%);background-position:center"
              }
              checkBoxt[k].appendChild(clonedNode)
              test()
              activeBoxt.target.style.cssText = 'left: ' + originalX + 'px;top:' + originalY + 'px;' + 'display:none'
              count ++
            }
          }
        }
        if(count === 0) {
          activeBoxt.target.style.cssText = 'left: ' + originalX + 'px;top:' + originalY + 'px;'
        }
        x1t = 0
        x2 = 0
        y1t = 0
        y2 = 0
        activeBoxt = null
        originalX = ''
        originalY = ''
        activeBoxIndex = ''
      })
    })
  }
  
  
  
  var boxIndex = null ;
  function test(){
    for( var i =0; i < checkBoxt.length; i++) {
      if(checkBoxt[i].getElementsByTagName("*").length && checkBoxt[i].children) {
        addEventHandlert(checkBoxt[i].lastChild,"mousedown",mousedownCb);
          function mousedownCb(e) {
            e.preventDefault()
            locatt = scopetInfoArrt //上面四个盒子位置信息
            removeBoxt = e
            boxIndex = findBoxt(removeBoxt.target)
            activeBoxXt = e.clientX - e.target.offsetLeft //计算出main_content到可视区域的左边
            activeBoxYt = e.clientY - e.target.offsetTop  //计算出main_content到可视区域的top
            document.addEventListener('mousemove', function(e) {
              e.preventDefault()
              if (removeBoxt) {
                removeBoxt.target.style.left = (e.clientX - activeBoxXt) + 'px'
                removeBoxt.target.style.top = (e.clientY - activeBoxYt) + 'px'
              }
            })
            document.addEventListener('mouseup', function(e) {
              e.preventDefault()
              if(!removeBoxt) return;
              removeBoxXt = locatt[boxIndex].x1t + removeBoxt.target.offsetLeft 
              removeBoxYt = locatt[boxIndex].y1t + removeBoxt.target.offsetTop
              x1t =  removeBoxXt  //中心点x
              y1t = removeBoxYt  //中心点y
              //是否在原来的框中
              if ( x1t >= locatt[boxIndex].x1t && y1t >= locatt[boxIndex].y1t && x1t <= locatt[boxIndex].x2 && y1t <=locatt[boxIndex].y2) {
                removeBoxt.target.style.left = '50%'
                removeBoxt.target.style.top = '46%'
              } else {
                var flag = true;
                for (var i = 0; i <locatt.length; i++) {
                  if(x1t >= locatt[i].x1t && y1t >= locatt[i].y1t && x1t <= locatt[i].x2 && y1t <=locatt[i].y2) {
                    var clonedNode = removeBoxt.target.cloneNode(true);
                    clonedNode.classList.remove(mobileClass);
                    if (domName == 'u10-cm2'){
                      clonedNode.style.cssText = "background-image: url('./images/commen/unitTen/cmTwo"+getPicInTopBoxt(removeBoxt.target)+".png');background-repeat: no-repeat;background-size: cover;left:50% ;top: 46%;position: absolute;width: 41%; height: 19%;transform: translate(-50%, -50%); background-position:center"
                    } else if(domName == 'u8-zs3') {
                      clonedNode.style.cssText = "background-image: url('./images/commen/unitEight/zsThree"+getPicInTopBoxt(removeBoxt.target)+".png');background-repeat: no-repeat;background-size: cover;left:50% ;top: 46%;position: absolute;width: 43%; height: 41%;transform: translate(-50%, -50%);background-position:center"
                    }
                    checkBoxt[i].appendChild(clonedNode)
                    removeBoxt.target.parentNode && removeBoxt.target.parentNode.removeChild(removeBoxt.target)
                    flag = false;
                    test()
                    x1t = 0
                    y1t = 0
                    removeBoxt = null
                    break;
                  }
                }
                // 回到原来的点
                if(flag === false) return;
                for( var j = 0; j < mobileBoxt.length; j++) {
                  if (removeBoxt.target.style.backgroundImage.replace(/[^0-9]/ig,"")-1 == j) {
                    removeBoxt.target.parentNode && removeBoxt.target.parentNode.removeChild(removeBoxt.target)
                    mobileBoxt[j].style.cssText = "display:block"
                  }
                }
              }
    
              
              x1t = 0
              y1t = 0
              removeBoxt = null
            })
          }
      }
    }
  }
  test();

  // activeBoxt = null
  // activeBoxXt = 0 //移动dom的x
  // activeBoxYt = 0 //移动dom的y
  // scopet = [] //放置位置的列表
  // removeBoxt = null
  // removeBoxXt = 0
  // removeBoxYt = 0

  // locatt = null
  // x1t = null
  // y1t = null
}

//判断框里面的图片
function getPicInTopBoxt(target) {
  return target.style.backgroundImage.replace(/[^0-9]/ig,"")
}

//给父元素的每个子元素绑定事件
function addEventHandlert(elm,eventType,handler){
  elm=typeof elm=="string"?document.getElementById(elm):elm;
  if(elm.attachEvent){
    elm.attachEvent("on"+eventType,handler);
  }else if(elm.addEventListener){
    elm.addEventListener(eventType,handler,false);
  }else 
    return false;
}

