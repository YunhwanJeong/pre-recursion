// 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
// function getElementsByClassName (className) {
//   return document.getElementsByClassName(className);
// };

// 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
// document.body / element.childNodes / element.classList 사용
// document.body는 body tag를 리턴
// childNodes는 직계자손 리스트를 리턴
// classList는 해당 요소의 class 리스트를 리턴

/**pseudo code
 * 
 * 인자로 className을 받아서 -> 호출한 root Element의 모든 자식 요소들의 class들과 대조하여 -> 일치하는 요소들을 HTMLCollection으로 리턴
 * 작은 문제를 해결한 다음, 전체를 재귀로 해결해야 함
 * 
 * 
 * 
 * 
 * -className 입력
 *  -body 태그에 한정해서 className이 일치하는게 있으면 document.body 리턴
 * 
 */
function getElementsByClassName(className) {
  let matchedElArr = [];
  let bodyTag = document.body;
  let bodyTagClasses = bodyTag.classList;

  for(let i = 0; i < bodyTagClasses.length; i++) {
    if(bodyTagClasses[i] === className) {
      matchedElArr.push(bodyTag);
    }
  }

  
};
