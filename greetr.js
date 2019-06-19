// when given a first name and last name, and an optional language,
// it should generate formal and informal greeting.
(function(global, $){

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.fn.init(firstname, lastname, language);
    }

    Greetr.fn = Greetr.prototype = {
        init: function(firstname, lastname, language) {
            this.firstname = firstname || 'Unknown';
            this.lastname = lastname || 'Unknown'; 
            this.language = language || 'en';
        }
    }

    global.Greetr = global.G$ = Greetr;

}(window, $))