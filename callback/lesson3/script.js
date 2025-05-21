
function process(callback){
    console.log("処理中...");
    callback();
}

process(() => {
    console.log("アロー関数でこんにちは!");
})