var objec = {

 name:'dharmadurai',
 nickname:'durai',
 fullname:function(){
     var full = this.name+this.nickname;
     return full;
 }
}


// (function(name,nickname) {

//     console.log(this.fullname());
//     console.log(arguments)
// }).call(objec,'dharma','durai');
// var bindmethod2 = bindmethod.bind(objec);
// console.log(bindmethod2('name1','name2'));

// console.log(bindmethod2.apply(objec,['dharma','durai']));




var objec2 = {

    name:'dharmadurai',
    nickname:'muthusamy'
}
console.log(objec.fullname.apply(objec2));

// function carrying
function multiply(a,b){

console.log(a*b);


}
var multiple = multiply.bind(this,3);
multiple(5);
