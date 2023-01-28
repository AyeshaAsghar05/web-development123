// if(5*2==11){
//     console.log("your answer is correct")

// }
// else{
//     console.log("your answer is incorrect")
// }
//for loop
Formula =  (X,y)=>{
    try{
alert(Math.pow(X,2)+5*y);
}
catch(error){
console.log("it is not working due to some error: "+error);
}
}
Formula(2,3);



for(let i=5;i<=50;i=i+5){
    console.log(i);
}
//while loop
let k=0;
while(k<10){
    console.log("helllo world");
    k++;
}
let j=0;
//do-while loop
do{
    console.log("hello im a programmer ");
    j++;
}
while(j<=100);
///for-in loop
//objects
let animal={
    name:"loin", 
    legs:4
};

for(let key in animal){
    console.log((key), animal(key));
}
//for-of loop
for(let name of names){
    console.log(name);
}
//arrays(object type lists are arrays )
let names=["rahul","neha","ayesha","sana"];//square brackets are literils
for(let index in names){
    console.log(index,names[index]);
    console.log (names.indexOf["ayesha",5])
    names.includes("amina")
}
//includes
names.includes('atsh')
let array=[{    
    name: 'my program',
    sub:'python'   
},
{
    name: 'coding',
    sub: 'c++'           //objects find using find()
},
{
    name: 'my code',
    sub: 'java'
}];

console.log(array.find(function(element){
    return element.sub=='java'
}))
//arrow function
console.log(array.find(element => element.name==='coding'))
//concatination
console.log(names.concat(array))
//spread operator (...)
let name1=[...name1,...names] //to concatinate 2 arrays use spread operator
//for loop
for(let i=0;i<names.length;i++){
    console.log(names[i])
}
//for-of loop
for(let nam of names){
    console.log(nam)
    
}
//for-each method in js
names.forEach(function(nam,index){
    console.log(nam,index);
})
//join
let student=['S','h','i','v','i','a']
console.log(student.join('_')) //pass a sperator in brackets to seperate words
//split
console.log(student.split('_'))  //romove the _from the student array
//filter method
console.log(array.filter(sub=>{
    return array.sub='c++'
}))
//map method
//create a new array populated with result of calling a provided functionn on every element of array
console.log(array.map(sub=>{
    return array.sub*sub

}))
//create new array that pass test implementated by function

//use obj for array
const num = new Array(1,2,3,4,5,6,7,8,9);
//push

num.push(10);  //add element ar last
//unshift
num.unshift(0);//add element in start
num.pop()  //remove value at last
num.shift()//reamove val at first
console.log(num);

console.log(num(num.length-1))

//function
function cooking(egg,water){//declare afunction
    console.log("your egg is boiled using"+egg*2+"minutes"+" ingredients are: "+egg+" eggs "+water+" water ");
}
cooking(4,2);  //call a function
cooking(2,3);//call more then one time
function addition(a,b){
    return a+b;
}
console.log(addition(2,5));//console is an obkect and log() is a function
//objects
let bird={  //object literal are carly braces
name: "parriot",  //property and value
leg: 2       //property and value
};
console.log(bird.name);///dot notation use moslty to access property

let legpro="leg";
console.log(bird[legpro]);///bracket notation use when property store in variable
//string conversions
String(123)//explicit conversion
Boolean(2);
Number('123')

123+''//implisit conversion
if(2){

}

//objects not an efficient
const course ={
    lectures: 14,
    section: 3,
    Title: "javaScript",
    notes:{//nesting
        introduction: "welcone t js course"
    },
    enroll(){       //when we use func in objects we call methods 
        console.log('you are sucesfully enrolled');

    }

}
course.enroll(); //use obj to call method
console.log(course)//dynamic nature
course.price=999;
//use factory func to make objects
function createCourse(lec,sec,tit,note){
    return{
       lec: lec,
       sec: sec,
       tit: tit,
       note: note,

        enrol(){
        console.log('you are sucesfully enrolled');

        }
    }
}
const courses=createCourse(13,3,"js",1);
const courses1=createCourse(14,2,"ss",5);
const courses2=createCourse(15,6,"js",3);


courses.enroll()
console.log(courses)
//constructor function  use class name or pascal case naming conversion
function Course(){
    this.title=title,
    this.enrol=function(){
        console.log("enrolled")
    }
}
const course=new Courses('javascript'); //new keyword create empty obj (course) and refer to 'this' keyword to return value
delete course.title;
Course.checkEnrollment=function(){
    console.log('user enrolled');
}
course.enrol() 
console.log(course);


const course1=new Courses('javascript'); //new keyword create empty obj (course) and refer to 'this' keyword to return value
console.log(course1.constructor);
//function is reference data type
const cours1=new Function('title',
`this.title=title,
this.enrol=function(){
    console.log("enrolled")
}`)
const course2=new cours1('ajva');
course2.enrol();
//difference btw premitive and reference datatypes
//premitive datatyoe
let number = 10;
//pass by value

let num2=number;
number=15;
console.log(number);
console.log(num2);
const sub={
    nam:'maths',
    enrolled(){
        console.log("enrolled")
    }
}
const sub1={...sub}
sub1.title='computer';

//referance dataatype
let obj={
    number:10
};
let obj2=obj;  //not pass value pass memeory locationn of vlaue 
obj.number=15;//if change both obj value to 15 
console.log(obj)
console.log(obj2)
//
const mysub= Object.assign({},sub)
mysub.tit='c#'
//loop through object
for(let key in sub){
    console.log(key,sub[key]);
}
for(let key of Object.keys(sub)){
    console.log(key,sub[key]);
}//output  ['title','enroll']
//copy
const sub_2={};
for(let key of Object.keys[sub]){
    sub_2.key=sub[key]
}
//exercise using objects
const product={
    itemName: 'flower',
    price: 50,
    discount:20,
    itemCode:'f40'
}
function createProduct(name,price,discount,itemCode){
    return{
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}
const football = createProducr('footvall',400,10 ,'f30');
function product(name,price,discount,itemCode){
    this.itemName=name;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;
    this.discountVal=function(){
        return price=discount/100;
    }
}
const mobile= new product('onePlus',3000,5,'dfsa20');
//classes are template to create objects
//declare a class
class Products{
    constructor(items,prices,pcode,discounts){
        this.items=items;
        this.prices=prices;
        this.pcode=pcode;
        this.discounts=discounts;
    }
}
//make class using expression
let pencil = new Products('oencil',20,2,'p10');
const Products1=class Products{
    constructor(items,prices,pcode,discounts){
        this.items=items;
        this.prices=prices;
        this.pcode=pcode;
        this.discounts=discounts;
    }
    ///getter and setter methods
    get getdiscountVal(){
        return this.discounts
    }
    set setdiscountVal(value){
        this.discounts=value;

    }
    //method
    discountValues(){
        return HTMLDListElement.discounts=this.prices/100
    }
};
let chair=new Products1('chair',400,15,'c10');
//extend a class 
class Box{
    constructor(name){
        this.name=name;
    }
    get getName(){
        return this.name+" is a outer  box"
    }
}
class InnerBox extends box(){
    constructor(name){
        super(name);//parent class constructor call
    }
    get getName(){
        return this.name+"  is inner box"
    }
}
let box1=new Box("red box");
let box2=new InnerBox("blue box");
