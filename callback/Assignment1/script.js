
function run(callback) {
  // コールバック関数を呼び出すように書いてみよう
  console.log("runが開始します。");
  callback();
  console.log("runが終了します。")
}

function sayHello() {
  console.log("こんにちは！");
}

run(sayHello);
