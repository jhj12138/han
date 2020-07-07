window.onload = function () {
  
}

/**
 * 获取用户输入数据
 * @param inputId = [],  input的ID  
 * @param ResultId = []， 答案的ID
 * @param type= 0.add(加法) --> 1.reduce(减法) --> 2.mcl(乘法) --> 3.divide(除法)
 * @param sort = false,   是否要按照顺序，默认不关注顺序
 * @param rightObj ,正确的数据
 */
function getUserObj(inputId, ResultId, type = 0, sort= false, rightObj) {
  var userObj = {
    type: type,
    data: [],
    result:  document.getElementById(ResultId).value
  }
  for(var i = 0; i < inputId.length; i++) {
    // console.log(inputId[i])
    // console.log(document.getElementById(inputId[i]).value,333)
    userObj.data[i] = document.getElementById(inputId[i]).value
  }
  if(calcData(userObj, rightObj)) {
    return true
  }else {
    return false
  }
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
  if(rightObj.sort) {
    if(userObj.data.toString() == rightObj.data.toString() && userObj.type == rightObj.type && userObj.result == right_result) {
      console.log(true)
      return true
    }else {
      console.log(false)
      return false
    }
  }else {
    if(userObj.data.sort().toString() == rightObj.data.sort().toString() && userObj.type == rightObj.type && userObj.result == right_result) {
      console.log(true)
      return true
    }else {
      console.log(false)
      return false
    }
  }
}


