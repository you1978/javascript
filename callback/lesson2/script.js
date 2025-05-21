
function process(callback){
    console.log("処理中...");
    callback();
}

process(function() {
    console.log("無名関数でこんにちは!");
})