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

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("funnc1です"));

// //アロー関数 引数が１つであれば省力できる。処理が一行であれば、ブランケット（{）も省略できる

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("funnc2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(5, 6));

/**
 * アロー関数と無名関数のち外
 * アロー関数は無名関数を簡略化した関数記法
 * 「this」を固定化する
 * 「コンストラクタ」を持たない
 * 「arguments」を持たな
 */

/**
 * 分割代入
 */

// const myProfile = {
//   name: "onthe6ks",
//   age: 32
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// // 毎回オブジェクト名を記載するのは冗長
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です!!`;
// console.log(message2);

// // 配列でも分割代入が可能
// const myProfile2 = ["onthe6ksss", 32];
// const [name2, age2] = myProfile2;
// const message3 = `名前は${name2}です。年齢は${age2}歳です!!`;
// console.log(message3);

/**
 * デフォルト値
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);

// sayHello();

/**
 * スプレッド構文 ...を記載する
 */

// 配列の展開

// const arr1 = [5, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapや　filterを使った配列処理
 */

// const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => {
//   console.log(`${name}さん`);
// });

// filter
// const numArr = [1, 2, 3, 4, 5, 6, 7];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);
