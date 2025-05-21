

function run(callback){
  console.log("runが呼ばれる");
  callback();
  console.log("runが呼び終わる");
}

run( function(){
  console.log("無名関数");
});

run( function(){
  console.log("再度呼びました！");
});