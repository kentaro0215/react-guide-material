function fn(number) {
  return number * 2;
}
console.log(fn(5));

const fnArrow = (number) => {
  //複数行の場合は省略することができない。returnを書かないとどれが戻り値がわからない
  return number * 2;
}
// 以下のように上記を省略することができる
// const fnArrow = (number) => return number * 2;
console.log(fnArrow(2));

//以下はオブジェクトを返り値とした場合は（）で囲う必要がある。
const fnArrowObj = number => ({result: number * 2});

console.log(fnArrowObj(3));