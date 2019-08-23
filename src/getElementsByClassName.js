// 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
// function getElementsByClassName (className) {
//   return document.getElementsByClassName(className);
// };

// 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:

// document.body / element.childNodes / element.classList 사용

// document.body -> body tag를 리턴
// childNodes -> 직계자손 HTML Collection 리턴
// classList -> 요소의 class들을 DOM TokenList로 리턴

/** <주제>
 *  getElementsByClassName과 같은 기능의 함수를 구현.
 * <기능 한 줄 정의>
 * 실행 주체를 root element로 하여 -> 모든 자식 요소를 탐색 -> 일치하는 className을 가진 모든 element들의 HTML Collection을 반환
 * <연관 개념>
 * -HTML Collection, DOM TokenList -> 유사 배열 객체.
 * -Node.haschildNodes(): 자식 노드가 있는지 여부를 boolean 값으로 반환.
 * -DOMTokenList.contains(token): DOMTokenList에 token이 있는지 boolean 값으로 반환. 
 * <유의점>
 * 재귀로 구현해야 함 -> 작은 단위의 문제를 구현 -> 이것을 재귀를 통해 전체에 적용해야 함
 * <알고리즘>
 * 내부 함수를 사용
 * 하나의 element에 모든 element에 적용될 수 있는 기능을 구현해서 재귀로 해결해야 함
 * 여기서 하나의 element는 body tag
 * <수도코드>
 * 1.바깥 함수에 빈 배열과 bodyTagNavi를 변수로 선언
 * 2.인자로 element를 받는 내부 함수를 선언
 * 3.body tag를 첫 인자로 받아 class의 존재 여부와 일치하는 class 있는지 확인해서 빈 배열에 push
 * 4.다음으로 body tag가 자식노드가 있는지 확인
 * 5.있으면 자식노드 loop 돌면서 재귀함수 사용해서 3번으로 돌아가 body tag 대신 각 자식노드들을 넣음
 * 6.내부함수 호출
 * 7.외부함수에서 배열 리턴시킴 
 */
function getElementsByClassName(className) {
  let matchedElementArr = [];
  let bodyTag = document.body;

  function checkClassAndChildnodesByRecursion(element) {
    if(element.classList.length && element.classList.contains(className)) {
      matchedElementArr.push(element);
    } 
    
    if(element.hasChildNodes()) {
      for(let i = 0; i < element.childNodes.length; i++) {
        if(element.childNodes[i].hasChildNodes()) {
          checkClassAndChildnodesByRecursion(element.childNodes[i]);
        }
      }
    }
  }
  checkClassAndChildnodesByRecursion(bodyTag);

  return matchedElementArr;
};
