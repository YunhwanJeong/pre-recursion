// 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
// var stringifyJSON = JSON.stringify;

// 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:

/**pseudo code
 * 
 * -JSON.stringify와 같은 기능을 하는 함수를 재귀로 구현.
 * 
 *  -obj를 입력
 *   -객체
 *    -빈 객체일 때: 빈 객체 그대로 string
 *    -순수 객체일 때: 객체 자체를 string으로 하고 속성에 "" 씌워 리턴(속성에 순서 x)
 *    -객체 안에 undefined, 함수, symbol 有: 해당 값들 생략
 *   -배열
 *    -빈 배열일 때: 빈 배열 그대로 string
 *    -순수 배열일 때: 배열 그대로 string
 *    -배열 안에 undefined, 함수, symbol 有: 해당 값들 null로 변환
 *   -숫자,Boolean, null: 그 값 그대로 string이 됨
 *   -문자열: 그 값에 "" 씌움
 */
function stringifyJSON(obj) {
  if(typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return "" + obj;
  }

  if(typeof obj === "string") {
    return '"' + obj + '"';
  }

  if(Array.isArray(obj)) {
    let resultArr = [];
    if(obj.length === 0) {
      return "[]";
    }

    for(let el of obj) {
      if(typeof el === "undefined" || typeof el === "function" || typeof el === "symbol") {
        resultArr.push(null);
      } else {
        resultArr.push(stringifyJSON(el))
      }
    }
  }

};

// var stringifyJSON = function(obj) { 
//   // 재귀함수로 사용하기 위해 반복되는 데이터 타입 확인
//   if(typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
//   return '' + obj;
//   } else if(typeof obj === 'string') {
//   return '“' + obj + '“';
//   }
//   var bin = [];
//   if(Array.isArray(obj)) {
//   if(obj.length === 0) {
//   return '[]';
//   } else {
//   for(var i = 0; i < obj.length; i++) {
//   if(typeof obj[i] === 'string') {
//   var str = stringifyJSON(obj[i]);
//   bin.push(str);
//   } else if(Array.isArray(obj[i])) {
//   var arr = stringifyJSON(obj[i]);
//   bin.push(arr);
//   } else if(typeof obj[i] === 'number') {
//   bin.push(obj[i]);
//   } else {
//   var ifObj = stringifyJSON(obj[i]);
//   bin.push(ifObj);
//   }
//   }
//   return '[' + bin + ']';
//   }
//   } else { 
//   var createdArr = [];
//   if(Object.keys(obj).length === 0) { 
//   return '{}';
//   } else {
//   for(var key in obj) {
//   if(typeof obj[key] === 'string' || typeof obj[key] === 'boolean' || obj[key] === null) {
//   var strKey = stringifyJSON(key);
//   var strVal = stringifyJSON(obj[key]);
//   var strArr = strKey + ':' + strVal;
//   createdArr.push(strArr);
//   } else if(Array.isArray(obj[key])) {
//   var arrKey = stringifyJSON(key);
//   var arrVal = stringifyJSON(obj[key]);
//   var arrArr = arrKey + ':' + arrVal;
//   createdArr.push(arrArr);
//   } else if(typeof obj[key] === 'function' || obj[key] === undefined) {
//   delete obj[key];
//   stringifyJSON(obj);
//   } else {
//   var objKey = stringifyJSON(key);
//   var objVal = stringifyJSON(obj[key]);
//   var objObj = objKey + ':' + objVal;
//   createdArr.push(objObj);
//   }
//   }
//   }
//   return '{' + createdArr + '}';
//   }
//   }; 