function mapForEach(arr,fn) {
  var newarr = [];
  for(var i=0;i<arr.length;i++) {
    newarr.push(fn(arr[i]))
  }
  return newarr;
};
var arr = [1,2,3,4];
console.log(arr);
/* var arr2 = mapForEach(arr,function(item){
 return item * 2
});
console.log(arr2);

 */
 var check = function(limit) {

     return  function(limit,item) {
      return item +limit;
    }.bind(this,limit);
}
 var arr2 = mapForEach(arr,check(3));
 console.log(arr2);

 //underscore
 /* var arr3 = _.map(arr,function(item){
  return item * 2;
});
console.log(arr3()); */
var arr4 = _.mapForEach(arr,function(item){
  return item*10;
})
console.log(arr4);
