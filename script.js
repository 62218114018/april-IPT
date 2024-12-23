//printing statement :

//console.log();

// console.log("helloo im js");

// console.log("new world");

//print the code :

//extension - code runner
//terminal - node file_name
//chrome - live server extension

//how to write the javascript code:
//syntax:
//variable_type variable_name = value ;
//console.log(variable_name);

//variable_types:
///var
//let
//const

// let sugarbox = "sugar"
// console.log(sugarbox);

//variable_types:
//var
// var a = 10 //redeclare
//   a = 5     //reassign
// console.log(a);
//let

// let b = 19; //it can't redeclare
//  b = 12; //reassign
// console.log(b);

// //const

// const c = 10; //it can't redeclare
// c = 90; //it can't reassign
// console.log(c);

//DATATYPES :
//primitive datatype

//string - "abc234567!@#$%^&" and 'wewe'

// var str = "javascript"
// console.log(str);

// //number - 121 and 12.23

// var num = 120.67
// console.log(num);

// //boolean - true or false
// //null

// var a = null
// console.log(a);

// //undefined

// var b
// console.log(b);

// non - primitive datatype

//array  - []
//collection of values and data within the square brackets

// var arr = ["sugar",12,123.23,true,null]
// console.log(arr[5]);

//object - {} -
//collection of key and value pairs

// var obj = {

//        name : "loki",
//        class : "x",
//        b_grp : "B+"

// }
// console.log(obj);

//function :  block of code
//function statement or declaration
//syntax:
//function var_nam(){

//}
//var_nam()

//parameters - is like an variable name
//arguments - is like value

// function bbhome(x) {
//   //parameter

//   console.log("birthdayboy");
//   console.log("relatives and friends");
//   console.log(x);
// }
// bbhome("blackforest cake"); //arguments

//var_type var_name = value
// var a = 10
// console.log(a);

// function box(x){
//      return x
// }
// console.log(box(10))

//function expression

// var bigbox = function(){ //anonymous function
//       console.log("im small box");
// }
// bigbox()

//o/p
//hello everone how are you

//immediate invoke function expression

//first type :
//seconde type

// var str = (function(x){
//     console.log(x);
// })("js")

//Arrow function - short hand syntax

//syntax :
// ()=>{ }

// let arr = (x) => {console.log(x)}
// arr("loki")

//operators :

//arithemetic operator
// + , - , * , /[quotient] , %modulus[remainder] , ** exponent[power of values] , ++ increment , -- decrement

// var num = 5
// var num2 = 5
// console.log(num**num2); //2^5 = 2x2x2x2x2 = 32

//increment :

// var inc = 10
// inc++ //10+1
// console.log(inc);

//assignment operator

// var a = 10
// a+= 5   // 15 += 5
// console.log(a);

//logical operator:

//&& => and
// || => or
// ! => not

// var a = 10
// var b = 101
// console.log(a != b);
//comparsion operator
// < less than , >greater than , <= less than or equal , >= greaterthanorequal

// var a = 10
// var b = 10
// console.log(a>=b);

// Equality operator

//double equals [loose equality]
//it will check the values not the datatype
// var a = 10
// var b = "10"
// console.log(a == b);

//triple equals [Strict equality]
//it will check both the values and datatype
// var c = 10
// var d = "10"
// console.log(c === d);

//Ternary operator :

//syntax

//(condition) ? statement_true : statement_false

// let age = 1000
//function

// function validation(age){

//     let limit = (age>=18 && age<=70)? "he is eligible to vote" : "he is not eligible to vote"

//     console.log(limit);

// }
// validation(1000)

//gec and callstack

// var a = 10
// console.log(a);

// var b = 5
// console.log(b);

// function box(){
//     var c = 100
//     console.log(c);

// }
// box()

// // Hoisting
// console.log(a)
// const a = 10
// console.log(a)

//LOOp :
//for
//syntax :
//for(initalization ; condition ; iteration[increment++ , decrement --]){

//}

// for(var i = 0;i<5;i++){
//     console.log(i)
// }

//step :
//step 1 => i = 0 => 0<5[true] => print :0 => i++ = 0++ = 1
//step 2 => i = 1 => 1<5[true] => print :1 => i++ = 1++ = 2
//step 3 => i = 2 => 2<5[true] => print : 2 => 2++ = 3
//step 4 => i = 3 => 3<5[true] => print : 3 => 3++ = 4
//step 5 => i = 4 => 4<5[true] => print : 4 => 4++ = 5
//step 6 = i = 5 => 5<5[false] loop will stop

//String

// let str = "javascript";

// for(var i = str.length-1 ;i>=0 ; i--){
//     console.log(str[i]);

// }
//o/p
//tpircsavaj
//hint
//while -
//syntax :
// var count = 5//initalization
// while(count>0){//condition
//     console.log(count);//printing statement
//     count -- //iteration

// }

//do-while

// var docount = 5
// do{
//     console.log(docount);//5
//     docount++

// }while(docount<5)//false

//if else

// var age = 10
// if(age>=18){
//     console.log("he is eligible to vote");

// }else{
//     console.log("he is not eligible to vote")

// }

// //else if

// let mark = 65

// if(mark>=90 && mark <=100){//false
//     console.log("Grade A");

// }else if(mark>=80){ //falsw
//     console.log("Grade B");

// }else if(mark >=70){ //false
//     console.log("Grade C");

// }else if(mark >=60){ //true
//     console.log("Grade D");

// }else if(mark >=50){
//     console.log("Grade E");

// }else{
//     console.log("Fail");

// }

//loop :

// 0 to 10  => even numbers

//  time = 9 => madurai bus will depart
//      10 to 11  => kerala bus will depart
//      3 to 4 => Trichy or salem bus will depart
//      other timiig => local bus will depart

//Array methods :

//push

// const bc = ["kali","gopal","hari",'venkat']
// bc.push("sabari")
// console.log(bc);

// //pop
// bc.pop()
// console.log(bc);

// //unshift

// const roll = ["kali","gopal","hari",'venkat']
// roll.unshift("sabari")
// console.log(roll);

// //shift
// roll.shift()
// console.log(roll)

// //concat

// const fruits = ["apple","mango","orange"]
// const veg = ["carrot","potato","tomato"]
// const cosmetics = ["powder","scent"]
// const cover = veg.concat(fruits,cosmetics)
// console.log(cover);

//sort

// const num = [9,2,5,3,7,8,10,1,6,4]
// num.sort((a,b)=>b-a)
// console.log(num);

// const alpha = ["Sakthi","Karthik","anbu","bala","Chandru"]
// alpha.sort()
// console.log(alpha);

// //slice

// const birds = ["Parrot","peacock","pigeon","dove","eagle"]
// const slc = birds.slice(2,-2)
// console.log(slc);

//splice

//syntax :
//var_name.splice("index",counter[0,1],actualvalue)
//0 => push and update the value
//1 => override and update the value

// const weeks = ["sunday","monday","Tuesday","Thursday","saturday"]
// weeks.splice(3,0,"wednesday")
// weeks.splice(5,1,"Friday")
// console.log(weeks);

//odd numbers :

//array maximum number [10,20,36,42,55]

//string methods:

//split :
//string => array
// var spl = "hello world"
// var spl2 = spl.split(" ")
// console.log(spl2);

// //join :
// //array => string
// var j = spl2.join("")
// console.log(j);

// //reverse :

// var str = "javascript"
// var rev = str.split("").reverse().join("")
// console.log(rev);

// //charat

// var str1 = "jai"
// console.log(str1.charAt(1));

// //indexof

// var idx = "Hello"  //it will take the first occurrence
// console.log(idx.indexOf("l"));

// //lastindexof
// var idx2 = "Hellol"  //it will take the last occurrence
// console.log(idx2.lastIndexOf("l"));

// //touppercase

// var up = "chennai"
// console.log(up.toUpperCase());

// //tolowercase

// var low = "NEWYORK"
// console.log(low.toLowerCase());

// //includes

// var inc = "javaj"
// var inc2 = inc.includes("j","j")
// console.log(inc2);

// //substring

// var sub = "ramakrishnan"
// console.log(sub.substring(4));

//Object:

//collection of key and value pairs
//json - javascript object notation

// const obj = {
//   name: "hari",
//   dep: "IT",
//   year: 2020,
// };

// //update the valus in obj
// obj.name = "navin";
// obj.dep = "non-it";
// console.log(obj);

// //see the values in obj
// console.log(obj.name);
// console.log(obj.dep);
// console.log(obj.year);

// //nested array and object

// const stdobj = [
//   {
//     name: "kali",
//     age: 12,
//     std: "V",
//   },

//   {
//     name: "Hari",
//     age: 13,
//     std: "VI",
//   },

//   {
//     name: "gopal",
//     age: 15,
//     std: "IV",
//   },

//   {
//     name: "ajay",
//     age: 5,
//     std: "III",
//   },
// ];
// console.log(stdobj[1].name);

//object destructuring :

// var obj = {
//     name : "pandi",
//     age : 14 ,
//     dep : "IT"
// }

// const {name,age,dep} = obj
// console.log(name,age,dep);

// //Array destructuring

// const arr = ["sunday","monday","Tuesday","wednesday"]

// const [day1,day2,day3,day4,day5]=arr
// console.log(day1,day2,day5);

//  Task
//nested array and object
//student id card = 5 people => 3std , 5std , 2std[name,phn.no]

//obj destructure :

//nested array and object -> office id card -> 4 people[name,dep,id.no,b.grp] -> 3person id card details

//For methods -> advance for loop concept
//forEach -> To read the array

//syntax :

//var_name.forEach((value,index,acctualarray)=>)

// var arr = ["sunday","monday","tuesday","wednesday","thursday"]
//  arr.forEach((val,idx,accarr)=> console.log(val,idx,accarr))

//forIn  -> to read  and loop the object
//syntax:
//for(var_type var_name in obj_name){
//code
//}

// var obj = {
//     name : "faizal",
//     city : 'newyork',
//     b_grp: "o+"
// }
// for(var x in obj){
//     console.log(obj[x]);

// }

//o/p
//name <=> faizal
//city <=> newyork
//b_grp <=> o+

//forOf -> array and string loop

//syntax :
//for(var_type var_name of str_name){
//code
//}
// var str = "java"
// for(var x of str ){
//     console.log(x);

// }

//string methods
//replace
// var greets = "Hello world!"
// console.log(greets.replace("Hello","welcome"));

// //repeat :
// var rep = "hi"
// console.log(rep.repeat(2));

//MRF :
//Map
//syntax :
///var_name.Map((value,index,actualarray)=>)

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // x 2
// const map = num.map((val, idx, accarr) => val * 2);
// console.log(map);

// //Reduce : add
// //syntax:
// //var_name.reduce((accumulator,value,index,acctualarray)=>)

// const reduce = num.reduce((acc, val, idx, accarr) => acc + val, 5);
// //5+1=6+2=8+3=11
// console.log(reduce);

// //Filter
// //syntax:
// //var_name.filter((val,idx,accarr))

// const filter = num.filter((val, idx, accarr) => val >= 5);
// console.log(filter);

//Task :
//filter :
//even and odd numbers

//this

// const obj = {
//      name : "jai",
//      age : 20 ,
//      details : function(){//local scope
//       console.log(this.age);

//      }

// }
// obj.details()

//template literals or string literals : `${}`

// var a = "HEllo"
// var b = "vijay"
// console.log(a+b+" how are you !! "); //old
// console.log(`${a} ${b} how are you !!`) //new

//settimeout
// setTimeout(()=>{
//   console.log("bomb blast")

// },3000)

//constructor :

// function Bike(name,model,year){
//     //key          value
//   this.Bikename = name
//   this.Bikemodel = model
//   this.Bikeyear = year

// }

// const details = new Bike("Duke","200",2020)
// console.log(details);

// const details2 = new Bike("Duke","390",2023)
// console.log(details2);

//class :

// class Student{

//     constructor(name,age,dep){
//       this.name = name
//       this.age = age
//       this.dep = dep
//     }

//     Studentdet(){
//       console.log(`The name is ${this.name} and the age is ${this.age} and the dep ${this.dep}`);

//     }

// }

// const details = new Student("gopi",20,"IT")
// details.Studentdet()

//callback :

// function name1(){
//   console.log("vijay");

// }

// function greet(x){
//   x()
//   console.log("hello goodmorning");

// }
// greet(name1)

//callback hell

// function box1(x) {
//   setTimeout(() => {
//     console.log("BIG box1");
//     x();
//   }, 4000);
// }

// function box2(y) {
//   setTimeout(() => {
//     console.log("Big box 2");
//     y();
//   }, 2000);
// }

// function box3(z) {
//   setTimeout(() => {
//     console.log("Big box 3");
//     z();
//   }, 3000);
// }

// function box4() {
//   setTimeout(() => {
//     console.log("Big box 4");
//   }, 1000);
// }

// //callback hell
// box1(() => {
//   box2(() => {
//     box3(box4);
//   });
// });

//Task
//officeobj - class
//Practice callback hell

//promise :
//resolve or reject

//arun
//watercanfill -2
//room clean - 1
//trash out-3

//syntax

//new Promise((resolve,reject)=>{Async code})

//resolve - .then()
//reject - .catch()

function water() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       const fillwater = true
       if(fillwater){
        resolve("Water can is filled");
       }else{
        reject("water can it not filled")
       }
      
    }, 3000);
  });
}

function room() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rooms = true 
      if(rooms){
        resolve("Roomm is cleaned");
      }else{
        reject("Room is not cleaned")
      }
     
    }, 500);
  });
}

function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const out = false
      if(out){
        resolve("trash is out");
      }else{
        reject("trash is not kept outside")
      }
      
    }, 4000);
  });
}

// water().then(value => {console.log(value);return room()})
//        .then(value2 => {console.log(value2); return trash()})
//         .catch(err => {console.log(err)}) 


 //async / await   

 async function work(){
  try{
    const watercans = await water()
    console.log(watercans); 

    const roomscleans = await room()
    console.log(roomscleans); 

    const garbage = await trash()
    console.log(garbage);
    
    
  }catch(err){
   
       console.log(err);
       
  }

 }
work()



