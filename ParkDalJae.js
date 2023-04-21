// 데이터타입 확인
function exampleOne(first, second, dataType) {
  if (typeof first !== dataType && typeof second !== dataType) {
    return new Error(
      `매개변수 first, second는 모두${dataType}타입이어야 합니다.`
    );
  } else {
    return `매개변수 모두 ${dataType}입니다.`;
  }
}
//짝수면 true 홀수면 false 리턴
function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {
  // Guide : exampleOne()함수를 호출하여 타입검사를 따로 합니다.
  // Guide : 타입 검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다.
  exampleOne(first, second, "number");

  let booleanResult;

  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if (typeof booleanResult === `boolean`) {
    return booleanResult;
  } else {
    return new Error("조건식 boolean이 아니라서 리턴하지 못했습니다.");
  }
}

let basicData = [4, 6, 23, 5, 94, 35, 44, 66];

function exampleThree(array, functionOne, functionTwo) {
  //매개변수 인자로 들어오는 함수 두개는 데이터 타입이 모두 함수여야 함
  //매개변수 array의 모든 원소는 숫자 정수여야 함
  //매개변수 array 배열길이(length)는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듦

  // if (typeof functionOne !== "function" && typeof functionTwo !== "function") {//! 함수 없이 쌩으로 확인해버림.
  //   return new Error(
  //     "functionOne, functionTwo자리의 매개변수는 모두 함수여야 합니다."
  //   );
  // }
  // console.log(typeof functionOne);
  // console.log(typeof functionTwo);
  console.log(functionOne(functionOne, functionTwo, "function"));

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return new Error(`array[${i}]번째의 값 "${array[i]}"는 숫자가 아닙니다.`);
    }
  }

  let tmpBoolean = arrayLengthEven(array);
  let arrayResult = [];
  if (tmpBoolean === true) {
    for (let i = 0; i < array.length; i = i + 2) {
      if (array[i] < array[i + 1]) {
        arrayResult.push([array[i], array[i + 1]]);
      } else if (array[i] > array[i + 1]) {
        arrayResult.push([array[i + 1], array[i]]);
      }
    }
  } else if (tmpBoolean === false) {
    array.push(10);
  }
  //매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교하여
  //비교한 작은 값은 arrayResult의 원소 배열의 0번째
  //큰 값은 arrayResult의 원소배열의 1번째에 넣어준다.

  return arrayResult;
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo));
// console.log(exampleOne(basicData[0], basicData[1], "number")); //"number" = undefined , "string" = error //! 테스트
// console.log(arrayLengthEven(basicData)); // output : (even)true, (odd)false //! 테스트
// console.log(arrayLengthEven(basicData)); //! 테스트
//Q 위의 콘솔을 확인하여
//함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만드시오

//! 테스트
let tmpNum = 0;
for (let i = 0; i < basicData.length; i = i + 2) {
  // console.log(i, i + 1);
  tmpNum++;
}
// console.log(tmpNum);
// console.log(exampleOne, isExampleTwo);
