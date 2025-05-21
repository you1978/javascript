
////// 関数定義

function greet() {
    console.log("こんにちは！");
}

function bye() {
    console.log("さようなら");
}

// function process(callback){
//     console.log("処理開始");
//     callback();
//     console.log("処理終了");
// }

function process(callback){
    console.log("処理開始");
    callback();
    console.log("処理終了");
}


/////// 処理

process(greet);
process(bye);


