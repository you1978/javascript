
function message1() {
  console.log("最初のメッセージ");
}

function message2() {
  console.log("次のメッセージ");
}

function runInOrder(callback1, callback2){
  callback1();
  callback2();
}

runInOrder(message1,message2);