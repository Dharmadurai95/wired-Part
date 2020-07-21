//var a = (2 * 2 ** 4);


var a = 0;
var b = -0;

console.log(null===undefined);

//this key word

var obj = {
name:"myname",
log:function(){
    this.name="your name",
    console.log(this);

    var log2 = function(name) {
        
        this.name=name;
    }
    log2("your name is ubdated");
  }

}
obj.log();
