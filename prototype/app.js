var person = {
    firstname:'dharma',
    lastname:'durai',
    fullname: function() {
        return this.firstname+''+this.lastname;
    }
};
var person2 = {
    firstname:'surya',
    lastnameA:'babu',
    friends:function() {
        return this. firstname+''+this.lastnameA;
    }
}

person2.__proto__=person;
document.write(person2.fullname());
 var jell = {
    firstname:'stephan'
};

jell.__proto__=person;
document.write(jell.fullname());