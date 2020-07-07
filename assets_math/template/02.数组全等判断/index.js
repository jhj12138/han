window.onload = function () {
  
}

/**
 * 获取用户输入数据
 * @param inputId = [],  input的ID  
 * @param ResultId = []， 答案的ID
 * @param type= 0.add(加法) --> 1.reduce(减法) --> 2.mcl(乘法) --> 3.divide(除法)
 * @param sort = false,   是否要按照顺序，默认不关注顺序
 */
function getUserObj(inputId, ResultId, type = 0, sort= false) {
  var userObj = {
    type: type,
    data: [],
    result:  document.getElementById(ResultId).value
  }
  for(var i = 0; i < inputId.length; i++) {
    userObj.data[i] = document.getElementById(inputId[i]).value
  }
  console.log(userObj)
  calcData(userObj, rightObj)
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
  console.log(userObj.type == rightObj.type)
  if(rightObj.sort) {
    if(userObj.data.toString() == rightObj.data.toString() && userObj.type == rightObj.type && userObj.result == right_result) {
      alert('通过')
    }else {
      alert('错误')
    }
  }else {
    if(userObj.data.sort().toString() == rightObj.data.sort().toString() && userObj.type == rightObj.type && userObj.result == right_result) {
      alert('通过')
    }else {
      alert('错误')
    }
  }
 
  console.log(right_result)
 
}


