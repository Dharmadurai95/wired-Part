function first(second) {
  console.log('hello world');
  second();

};
first(function(third){
    console.log('im second');
    third();
});
var third = function(){
    console.log("i'm third");
};