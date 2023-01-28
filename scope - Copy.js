
//seperation of code
//less use of resourses for better output
//globle and local scope and block scope
//scope is by default global
var name4='ayesha';//outsite the scope is global  //we use window keyword 
function sayName(){ //local scope  when we declare a variable iside local scope it give error
    var marks=10; //declare and execute inside
    console.log(name4);
}
sayName();
//console.log(marks); //when we call out side it distroy variable we get error

var x=0;
//global scope
function first(){
    //local scope
    var x=1;
    console.log(x);
    function child(){
        var x=2;
        console.log(x);//local scope


    }
    child()
}
first();
//global
function second(){
    console.log(x);

}
second()

///block scope
let i=10;   //use let keyword for block scope
{
let i=1;
console.log(x);
}
console.log(i);
//lexical scope    
function Madam(){
    var name='adsjf';
    //likes not accessable here
    function teacher(){
        console.log(name);
        function student(){
            var likes='coding';
        }
        console.log(teacher.likes); //error
        student();
    }
teacher();
}
Madam();