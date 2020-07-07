var answerBox = document.getElementById('orally-result')
var firstNumBox = document.getElementById('first-num')
var lastNumBox = document.getElementById('last-num')
var symbolBox = document.getElementById('symbol')
var scoreBox = document.getElementsByClassName('score')[0]
var degree = document.getElementById('degree')
var symbolArr = ['+','-'] //符号


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
  if(titleNum < 15) {
    degree.innerHTML = titleNum
  }
  
  //计分牌
  if (result == answerBox.innerHTML){
    console.log(parseInt(scoreBox.innerHTML))
    if(!parseInt(scoreBox.innerHTML)) {
      scoreBox.innerHTML = '001'
    } else if(parseInt(scoreBox.innerHTML) <= 8) {
      scoreBox.innerHTML = '00'+(parseInt(scoreBox.innerHTML) + 1).toString()
    } else if(parseInt(scoreBox.innerHTML) >= 9) {
      scoreBox.innerHTML = '0'+ (parseInt(scoreBox.innerHTML) + 1).toString()
    }
  }
  if(titleNum < 15) {
    init()
  }else{

  }
}

// setInterval(function () {
//   countDown.innerHTML = parseInt(countDown.innerHTML) - 1
// }, 1000)