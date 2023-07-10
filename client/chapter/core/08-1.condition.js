/* ---------------- */
/* Condition        */
/* ---------------- */

// let result = prompt('자바스크립트의 "공식"이름은 무엇일까요?').toLowerCase().trim();

// console.log(result);

// if (result === 'ecmascript') {
//   console.log('정답입니다!');
// } else {
//   console.log('모르셨나요? 정답은 ECMAScript입니다!');
// }

/* ------------------------------------- */

// let value = prompt('숫자를 입력해주세요', 0);

// if (value > 0) {
//   console.log('1');
// } else if (value < 0) {
//   console.log('-1');
// } else {
//   console.log('0');
// }

/* ------------------------------------- */

// let result = a + b < 4 ? '미만' : '이상';

/* ------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');

// if 문(statement)

// if(didWatchMovie === ''){
//   console.log('무슨 영화 봤어?');

// }else if (goingToWatchMovie === 'yes'){
//   console.log('나랑 영화 보러 갈래?');
// }
// else{
//   console.log('그래...');
// }

// 중첩문
if (!didWatchMovie) {
  let goingToWatchMovie = confirm('영화 볼거니?');

  if (goingToWatchMovie) {
    let withWho = prompt('누구랑 볼거니?');
    if (withWho === '여자친구') {
      console.log('ㅋㅋㅋ');
    } else if (withWho === '가족') {
      console.log('화목하네');
    } else {
      console.log('후기 들려줘~~~');
    }
  }
} else {
  let alone = confirm('너 혼자 봤니?');

  if (alone) {
    let didCry = confirm('너 울었니...?');

    if (didCry) {
      console.log('너.. 찌질했네..');
    }
  } else console.log('너 T야?');
}

/* 
// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?','');
// 영화 볼거니?



if(!didWatchMovie){
  
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');  
  
  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼거니?','');

    if(withWho === '여자친구'){
      console.log('zzz');
    }else if(withWho === '가족'){
      console.log('화목하네');
    }else{
      console.log('재밌게보구와~~~~');
    }
  }

}else{
  let alone = confirm('너 혼자 봤니?');
  
  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry){
      console.log('너..찌질했네..');

    }else{
      console.log('너 T야?');
    }
  }
}
 */

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
