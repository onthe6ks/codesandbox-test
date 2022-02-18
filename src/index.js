// /**
//  *  const let等の変数宣言
//  */

// /**
//  * コメントの記載方法
//  */

// var val1 = "val1変数";
// console.log(val1);

// //varは変数の上書きが可能
// val1 = "変数の上書き";
// console.log(val1);

// //var変数の再宣言
// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "上書き";
// console.log(val2);

// //letは再宣言不可 errorになる
// let val2 = "hoge";

// const val3 = "const変数";
// console.log(val3);

// constは上書きと再宣言不可
// val3 = "上書き";
// const val3 = "hoge";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hoge",
//   age: 28,
// };

// //オブジェトであれば、変更はできる
// val4.name = "abcd";
// val4.address = "tokyo"

// console.log(val4);

// //オブジェトであれば、変更はできる
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "onthe6ks";
// const age = 32;

// // 私の名前はonthe6ksです。年齢は28歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレートを文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str){
//   return str;
//  }

const func1 = function (str) {
  return str;
};

console.log(func1("funnc1です"));

//アロー関数 引数が１つであれば省力できる。処理が一行であれば、ブランケット（{）も省略できる

const func2 = (str) => {
  return str;
};

console.log(func2("funnc2です"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(5, 6));

/**
 * アロー関数と無名関数のち外
 * アロー関数は無名関数を簡略化した関数記法
 * 「this」を固定化する
 * 「コンストラクタ」を持たない
 * 「arguments」を持たな
 */
