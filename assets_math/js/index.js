var clearFish = null

//将秒数转换为时分秒格式
function formatSeconds(value) {
      var theTime = parseInt(value);// 秒
      var middle= 0;// 分
      var hour= 0;// 小时
  
      if(theTime > 60) {
          middle= parseInt(theTime/60);
          theTime = parseInt(theTime%60);
          if(middle> 60) {
              hour= parseInt(middle/60);
              middle= parseInt(middle%60);
          }
      }
      var result = ""+parseInt(theTime)+"秒";
      if(middle > 0) {
          result = ""+parseInt(middle)+"分"+result;
      }
      if(hour> 0) {
          result = ""+parseInt(hour)+"小时"+result;
      }
      return result;
  }
  
  //暂停所有音频
function pauseAll() {
  var allAudio = $('audio');
  allAudio.each(function(index, val ) {
    $(this)[0].currentTime = 0;
    $(this)[0].pause()
  })
}


//篮球投进
function fishAni1 () {
  var fish = 1
  var fishTotal = 37

  clearFish = setInterval(function () {
      fish++
      if (fish > fishTotal) fish = 1
      // ./images/animbg/shooting-ok.gif
      $('.ks-ani-gif-2 img').attr('src', './images/animbg/shooting-ok/'  + fish + '.png')
  }, 35)
}   



/**
 * 获取用户输入数据
 * @param inputId = [],  input的ID  
 * @param ResultId = []， 答案的ID
 * @param type= 0.add(加法) --> 1.reduce(减法) --> 2.mcl(乘法) --> 3.divide(除法)
 * @param sort = true,   是否要按照顺序，默认不关注顺序
 * false 为不排序  -不要开排序
 * @rightObj  = {}// 正确的对象
 */
function getUserObj(inputId, ResultId, type, sort, rightObj) {
  sort = sort || false;
  type = type || 0
  var result = document.getElementById(ResultId).value? document.getElementById(ResultId).value : ''
  var userObj = {
    type: type,
    data: [],
    result: result
  }
  for(var i = 0; i < inputId.length; i++) {
    userObj.data[i] = document.getElementById(inputId[i]).value
  }
  return calcData(userObj, rightObj)
}


/**
 * 计算加减乘除
 * @param userObj = {},  用户输入的  
 * @param rightObj = {}， 正确的答案  rightObj.
 * 
 */
function calcData(userObj, rightObj) {
  var right_result
  if(rightObj.type == 0) {
    right_result = rightObj.data.reduce(function (x, y) { return x + y; })
  }else if(rightObj.type == 1) {
    right_result = rightObj.data.reduce(function (x, y) { return x - y; })
  }else if(rightObj.type == 2) {
    right_result = rightObj.data.reduce(function (x, y) { return x * y; })
  }else {
    right_result = rightObj.data.reduce(function (x, y) { return x / y; })
  }
  console.log('qtr===',rightObj.type,right_result,rightObj.data)
  console.log('ooooo',userObj.data)
  if(rightObj.sort) {
    if(userObj.data.toString() == rightObj.data.toString() && userObj.type == rightObj.type && userObj.result == right_result) {
      return true;
    }else {
     return false
    }
  }else {
    if(userObj.data.sort().toString() == rightObj.data.sort().toString() && userObj.type == rightObj.type && userObj.result == right_result) {
      // alert(1)
      return true;
    }else {
      // alert(0)
     return false
    }
  }

}
  
function removeDrag(total_question_num,current_question) { //清除除自己以外的
  
  for(var j = 1; j <= total_question_num; j++) {
    var checkBoxs = document.getElementsByClassName("move_box"+j+"")
    for (var i = 0; i < checkBoxs.length; i++) {
      if (j != current_question){
        // console.log($(checkBoxs[i]))
        $(checkBoxs[i]).off('mousedown')
      }
    }
  }
}

function removeMyDrag(total_question_num) { //清除除自己的
  for(var j = 1; j <= total_question_num; j++) {
    var checkBoxs = document.getElementsByClassName("move_box"+j+"")
    for (var i = 0; i < checkBoxs.length; i++) {
        $(checkBoxs[i]).off('mousedown')
    }
  }
}


  