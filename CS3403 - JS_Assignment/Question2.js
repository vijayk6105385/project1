var message = "This is Global Variable"; //Global scope

var a = function(){
    var message = "This is in function 'a'"; //function scope
    console.log(message);
    b();
}

var b = function(){
    console.log(message);
}
a();