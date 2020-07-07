/**
 * 单选连线使用说明
 * 
 * 1.html页面创建要连线的dom，并自定义data-rigth="1", 两个data-right相同的dom为一组连线
 * 2.html页面创建显示连线的img标签（<img src="" class="line-img" id="xxx" alt="">class固定）
 * 3.给每个连线的起点绑定点击事件： document.getElementById('dot1').addEventListener('click', function (event) {idmouseStart(event, 'dot1')})   //传入起点的
 * 4.给每个连线的终点绑定点击事件： document.getElementById('dot2').addEventListener('click', function (event) { idmouse_click(currentStart, event) })  //下方绑定鼠标点击生成一张图片事件并传入起点
 * 5.重连按钮绑定重连事件  <button id="retry" onclick="lineAgain()">重连</button>
 * 6.提交按钮绑定提交事件  <button id="submit" onclick="submit()">提交</button>
 * 7.mouse_click中手动去设置
 */


var rigthArr = [-1, -1, -1, -1, -1]
var lineGroup_num = 5    //一共有几组连线
var rightId = 1;


var imgArr = [];     //已经生成直线图片的数组，用来判断是不是要删除之前的连线

var mouse_start_x = '';     //开始x坐标
var mosue_start_y = '';     //开始y坐标
var mouse_pos_x = '';     //结束x坐标
var mouse_pos_y = '';    //结束y坐标
var line = 5;           //线的宽度  
var currentStart = '';   //当前直线的起点id
var currentRight = '';
var currentIndex = '';
var delta = 1;
var canvas_wrapper = document.getElementById('canvas')

var c_width = window.innerWidth;
var c_height = window.innerHeight

var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.getElementById('dot1').addEventListener('click', function (event) {     //上方的传入起点的id
  mouseStart(event, 'dot1')
})

document.getElementById('dot2').addEventListener('click', function (event) {   //下方绑定鼠标点击生成一张图片事件并传入起点id
  mouse_click(currentStart, event)
})

document.getElementById('dot3').addEventListener('click', function (event) {
  mouseStart(event, 'dot3')
})

document.getElementById('dot4').addEventListener('click', function (event) {
  mouseStart(event, 'dot4')
})

document.getElementById('dot5').addEventListener('click', function (event) {
  mouseStart(event, 'dot5')
})

document.getElementById('dot6').addEventListener('click', function (event) {
  mouseStart(event, 'dot6')
})

//点击确定
function submit() {
  var pass;
  var rightNum = 0;
  for(var i = 0; i < rigthArr.length; i ++) {
    if(rigthArr[i] == 1) {
      rightNum++
    }
  }
  if(rightNum == 3 && rigthArr.indexOf(0) == -1) {
    pass = true
  }else {
    pass = false
  }

  console.log(pass)
}

//重连--清除所有连线
function lineAgain() {
  var allImg = document.getElementsByClassName("line-img");
  for (var i = 0; i < allImg.length; i++) {
    console.log(i);
    allImg[i].src = '';
  }
  rigthArr = [];    //清空已经连过的记录数组
}

//点击创建一个点，若已经连线将已画线清除   id：起点的id
function mouseStart(event, id) {
  canvas_wrapper.style.display = 'block';
  currentStart = id
  currentRight = document.getElementById(id).getAttribute('data-right')
  currentIndex = document.getElementById(id).getAttribute('data-index')
  console.log(currentIndex)
  if (imgArr.indexOf(id) == -1) {
    mouse_start_x = event.clientX;
    mosue_start_y = event.clientY;
    mouse_pos_x = mouse_start_x;
    mouse_pos_y = mosue_start_y;
    document.addEventListener('mousemove', mouse_track);
    draw()
    imgArr.push(id)
  } else {
    var allImg = document.getElementsByClassName("line-img")
    console.log(allImg)
    for (var i = 0; i < allImg.length; i++) {
      console.log(allImg[i].getAttribute('data-a'))
      if (allImg[i].getAttribute('data-a') == id) {
        mouse_start_x = event.clientX;
        mosue_start_y = event.clientY;
        mouse_pos_x = mouse_start_x;
        mouse_pos_y = mosue_start_y;
        var delId = allImg[i].getAttribute('id')
        document.getElementById(delId).src = ''
        document.addEventListener('mousemove', mouse_track);
        draw()
        // imgArr.push(id)
      }
    }
  }
}

//点击生成连线（图片）
function mouse_click(startId, event) {
  console.log(event)
  canvas_wrapper.style.display = 'none';
  // var endRight = event.target.dataset.right;
  if (mouse_start_x && mosue_start_y) {
    var mouse_end_x = event.clientX;
    var mosue_end_y = event.clientY;

    if (currentRight == rightId) {
      rigthArr[currentIndex] = 1
    } else {
      rigthArr[currentIndex] = 0
    }
    console.log(rigthArr)
    if (startId == 'dot1') {       //这里给每个id匹配一个img标签
      var image1 = document.getElementById('img1')
      image1.src = canvas.toDataURL("image/png");
      document.removeEventListener('mousemove', mouse_track);
      image1.setAttribute('data-a', startId)
    } else if (startId == 'dot3') {
      var image2 = document.getElementById('img2')
      image2.src = canvas.toDataURL("image/png");
      document.removeEventListener('mousemove', mouse_track);
      image2.setAttribute('data-a', startId)
    } else if (startId == 'dot5') {
      var image3 = document.getElementById('img3')
      image3.src = canvas.toDataURL("image/png");
      document.removeEventListener('mousemove', mouse_track);
      image3.setAttribute('data-a', startId)
    } else if (startId == 'dot4') {
      var image4 = document.getElementById('img4')
      image4.src = canvas.toDataURL("image/png");
      document.removeEventListener('mousemove', mouse_track);
      image4.setAttribute('data-a', startId)
    } else if (startId == 'dot6') {
      var image6 = document.getElementById('img6')
      image6.src = canvas.toDataURL("image/png");
      document.removeEventListener('mousemove', mouse_track);
      image6.setAttribute('data-a', startId)
    } 
  } else {
    return false
  }
}

function mouse_track(event) {
  if ((Math.abs(mouse_pos_x - event.clientX) > delta) || (Math.abs(mouse_pos_y - event.clientY) > delta)) {
    mouse_pos_x = event.clientX;
    mouse_pos_y = event.clientY;
  }
}

//****** DRAW ******//

function draw() {

  canvas.width = c_width;
  canvas.height = c_height;

  ctx.lineWidth = line;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  //Draw line
  ctx.beginPath();

  ctx.moveTo(mouse_start_x, mosue_start_y);     //设置起点状态
  ctx.lineTo(mouse_pos_x, mouse_pos_y);       //设置末端状态
  ctx.stroke();

  window.requestAnimationFrame(draw);
}


window.onresize = function () {  //监听窗口变化，动态设置canvas尺寸三
  watchChangeSize();
}

function watchChangeSize() {
  //可视区的宽/高(DOM)
  //offsetHeight（带边框）和clientHeight（不带边框）区别参考上一篇文章     
  var offsetWid = document.documentElement.clientWidth;
  var offsetHei = document.documentElement.clientHeight;
  c_width = offsetWid;
  c_height = offsetHei;
  console.log(offsetWid);
  console.log(offsetHei);
}