
/**
 * 移动保留原来位置上的东西
 *
 * @param domName 第几道题 
 * @param checkBox 需要添加的dom
 * @param moveClass 需要移动的dom
 * 
 */


// domName
var newdomName = null //是否是同一题

function toDrag(domName,checkBox,moveClass) {
  newdomName = domName
  if (newdomName != domName) return
  var moveBoxs = document.getElementsByClassName(moveClass) //需要移动的dom
  var checkBoxs = document.getElementsByClassName(checkBox) //需要添加的dom
  var activeBoxs = null
  var activeBoxXs = 0 //移动dom的x
  var activeBoxYs = 0 //移动dom的y
  var scopes = [] //放置位置的列表
  var removeBoxs = null
  var removeBoxXs = 0
  var removeBoxYs = 0

  var locats = null
  var x1s = null
  var y1s = null 


  
  //判断你是在哪个框里面

  //判断框里面的图片
  function getPicInTopBoxs(target) {
  return target.style.backgroundImage.replace(/[^0-9]/ig, "")
  }

  function getScopes() { //放置位置的列表
    scopes = []
    for (var j = 0; j < checkBoxs.length; j++) {
      // 需要填写的div的范围
      // if (checkBoxs[j].offsetLeft && checkBoxs[j].offsetLeft + checkBoxs[j].offsetWidth && checkBoxs[j].offsetTop && checkBoxs[j].offsetTop + checkBoxs[j].offsetHeight){
        scopes.push({
          x1s: checkBoxs[j].offsetLeft,
          x2s: checkBoxs[j].offsetLeft + checkBoxs[j].offsetWidth,
          y1s: checkBoxs[j].offsetTop,
          y2s: checkBoxs[j].offsetTop + checkBoxs[j].offsetHeight,
        })
      // }
    }
    return scopes
  }
  var scopeInfoArrs = getScopes();
  window.onresize = function () {
    scopeInfoArrs = getScopes();
  }

  for (var i = 0; i < moveBoxs.length; i++) {
    //鼠标按下
    $(moveBoxs[i]).on('mousedown', function jhj(e) {
      console.log('11111111111')
      activeBoxs = e
      activeBoxXs = e.clientX - e.target.offsetLeft //计算出main_content到可视区域的左边
      activeBoxYs = e.clientY - e.target.offsetTop  //计算出main_content到可视区域的top

      // 元素原来的位置
      var originalX = e.target.offsetLeft
      var originalY = e.target.offsetTop
      locats = scopeInfoArrs;
      // 鼠标移动
      document.addEventListener('mousemove', function (e) {
        e.preventDefault()
        if (activeBoxs) {
          activeBoxs.target.style.cssText = 'left: ' + (e.clientX - activeBoxXs) + 'px;top:' + (e.clientY - activeBoxYs) + 'px'  //相对与main_content的定位
        }
      })
      document.addEventListener('mouseup', function (e) {
        if (!activeBoxs) return;
        x1s = e.target.offsetLeft + e.target.offsetWidth/2 //中心点x
        y1s = e.target.offsetTop + e.target.offsetHeight/2//中心点y
        var count = 0;
        for (var k = 0; k < locats.length; k++) {
          if (x1s >= locats[k].x1s && y1s >= locats[k].y1s && x1s <= locats[k].x2s && y1s <= locats[k].y2s) {
            if (count === 0) {
              if (checkBoxs[k] != undefined) {
                if (!checkBoxs[k].children.length) {
                  var clonedNode = e.target.cloneNode(true);
                  clonedNode.classList.remove(moveClass)
                  if (domName == 'u3-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50.5%; top: 50.7%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u3-cm5') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50.3%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-zs1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u5-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u5-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm6') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm7') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm8') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u8-zs2') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitEight/zsTwo"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 71%;height: 47%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u13-cm8') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitThirt/jian"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm5') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs2-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs2-cm10') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u20-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs3-q11') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs4-cm4') {
                    clonedNode.style.cssText = "background: url('./images/commen/ceshiFour/csFour"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 35%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u17-zs2') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitSevete/zsTwo"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 35%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  }
                  checkBoxs[k].appendChild(clonedNode)
                  activeBoxs.target.style.cssText = 'display:block'
                  test()
                } else {
                  checkBoxs[k].removeChild(checkBoxs[k].firstChild)
                  var clonedNode = e.target.cloneNode(true);
                  clonedNode.classList.remove(moveClass)
                  if (domName == 'u3-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50.5%; top: 50.7%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u3-cm5') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50.3%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-zs1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u5-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u5-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm6') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm7') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm8') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u8-zs2') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitEight/zsTwo"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 71%;height: 47%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u13-cm8') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitThirt/jian"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm5') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs2-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs2-cm10') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u20-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs3-q11') {
                    clonedNode.style.cssText = "background: url('./images/"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs4-cm4') {
                    clonedNode.style.cssText = "background: url('./images/commen/ceshiFour/csFour"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 35%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u17-zs2') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitSevete/zsTwo"+ getIndexs(activeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 35%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  }
                  checkBoxs[k].appendChild(clonedNode)
                  activeBoxs.target.style.cssText = 'display:block'
                  test()
                }
              }
              // activeBoxs.target.style.cssText = 'display:block'
              
              count++
            }
          }
        }
        if (count === 0) {
          activeBoxs.target.style.cssText = 'display:block'
        }
        x1s = 0
        y1s = 0
        activeBoxs = null
        originalX = ''
        originalY = ''
        activeBoxIndex = ''
      })
    })
  }

  var boxIndex = null;
  function test() {
    for (var i = 0; i < checkBoxs.length; i++) {
      if (checkBoxs[i].getElementsByTagName("*").length && checkBoxs[i].firstChild) {
        addEventHandlers(checkBoxs[i].firstChild, "mousedown", mousedownCb);
        function mousedownCb(e) {
          e.preventDefault()
          locats = scopeInfoArrs //上面四个盒子位置信息
          removeBoxs = e
          boxIndex = findBoxs(removeBoxs.target)
          activeBoxXs = e.clientX - e.target.offsetLeft //计算出main_content到可视区域的左边
          activeBoxYs = e.clientY - e.target.offsetTop  //计算出main_content到可视区域的top
          document.addEventListener('mousemove', function (e) {
            e.preventDefault()
            if (removeBoxs) {
              removeBoxs.target.style.left = (e.clientX - activeBoxXs) + 'px'
              removeBoxs.target.style.top = (e.clientY - activeBoxYs) + 'px'
            }
          })
        }
        document.addEventListener('mouseup', function (e) {
          e.preventDefault()
          if (!removeBoxs) return;
          // console.log()
          removeBoxXs = locats[boxIndex].x1s + removeBoxs.target.offsetLeft
          removeBoxYs = locats[boxIndex].y1s + removeBoxs.target.offsetTop
          x1s = removeBoxXs //中心点x
          y1s = removeBoxYs//中心点y
          if (x1s >= locats[boxIndex].x1s && y1s >= locats[boxIndex].y1s && x1s <= locats[boxIndex].x2s && y1s <= locats[boxIndex].y2s) {
            removeBoxs.target.style.left = '50%'
            removeBoxs.target.style.top = '50%'
          } else {
            // console.log('zzzzzzzz')
            var flag = true;
            for (var i = 0; i < locats.length; i++) {
              if (x1s >= locats[i].x1s && y1s >= locats[i].y1s && x1s <= locats[i].x2s && y1s <= locats[i].y2s) {
                if (checkBoxs[i].firstChild) { //目标box有东西进行替换
                  var clonedNode1 = removeBoxs.target.cloneNode(true)
                  var clonedNode2 = checkBoxs[i].firstChild.cloneNode(true)
                  clonedNode1.style.left = '50%'
                  clonedNode1.style.top = '50%'
                  clonedNode2.style.left = '50%'
                  clonedNode2.style.top = '50%'
                  var srcBox = findBoxs(removeBoxs.target)
                  removeBoxs.target.parentNode && removeBoxs.target.parentNode.removeChild(removeBoxs.target)
                  checkBoxs[i].removeChild(checkBoxs[i].firstChild)
                  checkBoxs[i].appendChild(clonedNode1)
                  checkBoxs[srcBox].appendChild(clonedNode2)
                } else { //目标box没有东西时变化
                  var clonedNode = removeBoxs.target.cloneNode(true);
                  clonedNode.classList.remove(moveClass)
                  if (domName == 'u3-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50.5%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u3-cm5') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50.3%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 45%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u4-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u5-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u5-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 47%;height: 55%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm6') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm7') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs-cm8') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u8-zs2') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitEight/zsTwo"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;background-position: center;width: 71%;height: 47%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u13-cm8') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitThirt/jian"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 42%;height: 54%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-zs4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u14-cm5') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs2-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'cs2-cm10') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-zs2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm3') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u19-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u20-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm1') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm2') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if(domName == 'u21-cm4') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs3-q11') {
                    clonedNode.style.cssText = "background: url('./images/"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 44%;height: 49%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'cs4-cm4') {
                    clonedNode.style.cssText = "background: url('./images/commen/ceshiFour/csFour"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 35%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  } else if (domName == 'u17-zs2') {
                    clonedNode.style.cssText = "background: url('./images/commen/unitSevete/zsTwo"+ getPicInTopBoxs(removeBoxs.target) + ".png');background-repeat: no-repeat;background-size: cover ;width: 35%;height: 48%;position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);background-position: center;"
                  }
                  checkBoxs[i].appendChild(clonedNode)
                  removeBoxs.target.parentNode && removeBoxs.target.parentNode.removeChild(removeBoxs.target)
                }
                flag = false;
                test()
                x1s = 0
                y1s = 0
                removeBoxs = null
                break;
              }
            }
            // 回到原来的点
            if (flag === false) return;
            for (var j = 0; j < moveBoxs.length; j++) {
              if (removeBoxs.target.style.backgroundImage.replace(/[^0-9]/ig, "") - 1 == j) {
                removeBoxs.target.parentNode && removeBoxs.target.parentNode.removeChild(removeBoxs.target)
                // moveBoxs[j].style.cssText = "display:block"
              }
            }
          }
          x1s = 0
          y1s = 0
          removeBoxs = null
        })
      }
    }
  }

  test()

}


 

//给父元素的每个子元素绑定事件
function addEventHandlers(elm, eventType, handler) {
  elm = typeof elm == "string" ? document.getElementById(elm) : elm;
  if (elm.attachEvent) {
    elm.attachEvent("on" + eventType, handler);
  } else if (elm.addEventListener) {
    elm.addEventListener(eventType, handler, false);
  } else
    return false;
}

function getIndexs(el) { //获取到下面需要拖拽div的index
  if (!el) {
    return -1
  }
  let index = 0
  do {
    index++
  } while (el = el.previousElementSibling);
  return index
}

function findBoxs(target) {
  return getIndexs(target.parentNode) - 1
}



function once(type, selector, callback) {
  selector.addEventListener(type, function fn(e) {
      e.target.removeEventListener(e.type, fn);
      return callback(e);
  }, false);
}