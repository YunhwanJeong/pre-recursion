// 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
// function getElementsByClassName (className) {
//   return document.getElementsByClassName(className);
// };

// 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
// document.body / element.childNodes / element.classList 사용
// document.body는 body tag를 리턴
// childNodes는 직계자손 리스트를 리턴
// classList는 해당 요소의 class 리스트를 리턴

/** <한 줄 기능 정의>
 *  재귀를 활용하여->전달된 인자와 일치하는 className을 가진 모든 요소들을 담은 배열을 리턴
 * 
 * <유의할 점>
 * 
 * 자식 노드들의 깊이는 알 수 없기에, 내부에 재귀 함수를 따로 정의할 필요가 있어보임.
 * 
 * 
 * 
 * <알고리즘>
 * 빈 배열과 body 요소 가리키는 변수 정의.
 * 재귀 함수 내부 => 자식 노드가 있고, classList 중 className과 일치하는 요소가 있으면 push
 * 
 * 
 * pseudo code
 * 
 * -className 입력
 *  -body 태그에 한정해서 className이 일치하는게 있으면 document.body 리턴
 * 
 */
function getElementsByClassName(className) {
  let matchedElArr = [];
  let bodyTag = document.body;
  
  function recursion(element) {
    if(element.classList && element.classList.contains(className)) {
      matchedElArr.push(element);
    }

    if(element.hasChildNodes) {
      for(let i = 0; i < element.childNodes.length; i++) {
        recursion(element.childNodes[i]);
      }
    }
  }
  recursion(bodyTag);

  return matchedElArr;
};
