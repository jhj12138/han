
var input = document.getElementById('inputs')

var inputsBox = document.getElementsByClassName('inputsBox')
// console.log(input)

// const optionBox = document.getElementsByClassName('option');
var arr  = [];
var rightArr = []

function asd(e,i) {
  // console.log(e.target.value)
  // console.log(e.target.dataset.num)
  // console.log('i===',i)
  arr[i] = e.target.value;
  console.log(arr)
}

function answer() {
  let optionsHtml = ''
  for (let i = 0; i < data.length ; i++) {
    optionsHtml += "<div class='inputs_box'><img src='./images/crayon.png' class = 'img_box'><input type='text' class='inputs' onchange='asd(event,"+i+")' data-num = "+data[i].digital+" ></div>"
    rightArr.push(data[i].digital)
  }
  center.innerHTML = optionsHtml
}
answer();

function submit() {
  var step = 0;
  for (let i = 0; i < arr.length ; i++) {
    if(arr[i] == rightArr[i]){
      step ++
    }
  }
  if(step === data.length){
    alert('全部答对')
    return;
  }
  alert('继续努力')
}





