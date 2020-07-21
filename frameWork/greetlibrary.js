;(function(global,$) {
    var greetr = function(firstName,lastName,language) {
        return new greetr.init(firstName,lastName,language);
    }
    var selectLang = ['tamil','en','es'];

    var greeting = {
        tamil:'vanakkm',
        en:'hai',
        es:'hola'
    };

    var formalgreeting = {
        tamil:'tamil vanakkam',
        en:'greeting',
        es:'saludos'
    };

    var logmessage = {
        tamil:'varuga',
        en:'loggde in',
        es:'inicio session'
    };


    greetr.prototype = {
                fullname:function() {
                    return this.firstName+''+this.lastName;
                },
                 validate:function() {

                    if(selectLang.indexOf(this.language)=== -1) {
                        throw 'invalid language'
                    }
                },
                 greeting:function(){

                     return greeting[this.language]+''+this.firstName;

                },

                formalgreeting:function() {

                    return formalgreeting[this.language]+''+this.fullname();

                },

                greet:function(formal) {
                    var msg;
                    if(formal) {
                        msg = this.formalgreeting()
                    }
                    else {
                        msg = this.greeting()
                    }
                    if(console.log) {
                        console.log(msg)
                    }
                    return this;
                },
                log:function() {
                    if(console) {
                        console.log(logmessage[this.language] + ':'+this.fullname());
                    }
                    return this;
                },
                setLang:function(lang) {
                    this.language = lang;
                    this.validate();
                    return this;
                },
                HTMLgreeting:function(selector,formal) {
                    if(!$) {
                        throw 'jQuery does not have';
                    }
                    if(!selector) {
                        throw 'missing jQuerry'
                    }
                    var msg;
                    if(formal) {
                        msg = this.formalgreeting();
                    } 
                    else {
                        msg =this.greeting()
                    }
                    $(selector).html(msg);
                    return this;

                }

    }
    greetr.init = function(firstName,lastName,language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'tamil';

        self.validate();
    }
    greetr.init.prototype =    greetr.prototype ;
    global.greetr = global.G$ = greetr;

}(window,$))