// 获取答案框
var answerBox = document.getElementById('main_top_right')
var firstNumBox = document.getElementById('first_num')
var lastNumBox = document.getElementById('last_num')
var symbolBox = document.getElementById('symbol')
var scoreBox = document.getElementById('score')
var degree = document.getElementById('degree')
var symbolArr = ['+','-'] //符号
var countDown = document.getElementById('countdown')
//题目数量


var  titleNum = 0 //题数

function init() { //初始化题目
  var symbol = Math.floor(Math.random()*2)
  clearVal()
  symbolBox.innerHTML = symbolArr[symbol]
  if(symbol === 1){ //当符号为减号时执行这段代码
    firstNumBox.innerHTML = parseInt(Math.random()*20)
    lastNumBox.innerHTML = parseInt(Math.random()*20)
    if(parseInt(firstNumBox.innerHTML,10) < parseInt(lastNumBox.innerHTML,10)){
      var a = firstNumBox.innerHTML;
      firstNumBox.innerHTML = lastNumBox.innerHTML;
      lastNumBox.innerHTML = a;
    }
    return;
  }
  if(symbol === 3){ //如果除数为0时执行这段代码
    firstNumBox.innerHTML = parseInt(Math.random()*20)
    lastNumBox.innerHTML = parseInt(Math.random()*20)
    if(lastNumBox.innerHTML == 0){
      symbolBox.innerHTML = symbolArr[Math.floor(Math.random()*3)]
    }
    return;
  }
  firstNumBox.innerHTML = parseInt(Math.random()*20)
  lastNumBox.innerHTML = parseInt(Math.random()*20)
}
init()

function setVal(val) {
  if(answerBox.innerHTML.length <= 2){
    answerBox.innerHTML += val
  }
}

function clearVal() {
  answerBox.innerHTML = ''
}

function ensure() {
  var firstVal = parseInt(firstNumBox.innerHTML)
  var symbols = symbolBox.innerHTML
  var lastVal = parseInt(lastNumBox.innerHTML)
  var result = null
  // console.log('answer ===',`${parseInt(firstVal) symbol parseInt(lastVal))}`;
  switch (symbols) {
    case '+':
      result = firstVal + lastVal 
      break;
    case '-':
      result = firstVal - lastVal 
      break;
    default:
      break;
  }
  titleNum ++ 
  degree.innerHTML = titleNum
  console.log('对比',symbol, result, answerBox.innerHTML);
  
  if (result == answerBox.innerHTML){
    scoreBox.innerHTML = parseInt(scoreBox.innerHTML) + 1
    alert('答对了')
  }else {
    alert('答错了')
  }
  if(titleNum < 3) {
    init()
  }else{
    window.location = 'https://www.baidu.com'
  }
}

setInterval(function () {
  countDown.innerHTML = parseInt(countDown.innerHTML) - 1
}, 1000)
// var 

// function answer() {
//   let optionsHtml = ''
//   for (let i = 0; i < data.length ; i++) {
//     optionsHtml += `
//       <div class="inputs_box">
//         <img src="./images/crayon.png" alt="" class = "img_box">
//         <input type="number" id="inputs" onchange="asd(event,${i})" data-num = "${data[i].digital}" >
//       </div>
//     `
//     rightArr.push(data[i].digital)
//   }
//   center.innerHTML = optionsHtml
// }
// answer();




