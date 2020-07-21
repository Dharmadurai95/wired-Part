/* function person(){
    this.name = "sathish",
    this.age = 12,
    this.getName = function(){
        return this.name;
    }
};

function personTwo() {
    this.name = "steve"
}

let personObject = new person();


console.log(personObject.getName.call(new personTwo())); */

function programing(arr,fun ) {
    var arr2 = [];
    for(var i=0;i<arr.length;i++){
        arr2.push(fun(arr[i]));
    };
    return arr2;
};

    var arr = [1,8,9,4,5,5];
var res1 = programing(arr,function(item){
   /* return item*2 */return item>2
});
console.log(res1); 

 var   checkpastlimit  = function(limit){
     return function(limit,item) {
       return item >limit;

  }.bind(this,limit);
};
 var res2 = programing(arr,checkpastlimit(3));
console.log(res2);

