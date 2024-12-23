// Data types
//  2 types

//  1) Primitive data typeo
//  2) non primitive data typeof

//     1) PRIMITIVE DATA TYPE

//     1) String
//     2) Number
//     3) Boolean
//     4) null
//     5) undefined


// 1) STRING 

var name = "Navin"
console.log(name)

// 2) number

var number = 55.5
console.log(number)

// 3) boolean

var boolean = (5<6)
console.log(boolean)

// 4) null

var no = null
console.log(no)

// 5) undefined

var undefined
console.log(undefined)

//  2) NON PRIMITIVE DATA TYPE

//     1) Array
//     2) Object


// 1) ARRAY

var Array = (hi) = ["Hellow","[Name]","How are you","[?]",1]
console.log(hi)

var Array = (hi) = ["Hellow","[Name]","How are you","[?]",1]
console.log(hi[2])

// 2 ) OBJECT

var Object = {

    name : "Navin",
    age  : 23,

}
console.log(Object)
  
                          //   FUNCTIONS

// 1) FUNCTION BLOCK (or) STATEMENT

function house () {

    var boy = "birthday boy"
    console.log(boy);
    var relatives = "relatives & friends"
    console.log(relatives);
    
}
house()

//parameter - is like an varible name
//argument - is like an value

function box(x) {//parameter
    console.log(x)
}
box("happy")//argument

//return

function box2(y) {
    return y
    
}
console.log(box2("police"));

//FUNCTION EXPENSION
var bigbox = function () {  //ananomous function
    console.log("hi me");
    
}
bigbox()

//IMMEDIATE INVOKE FUNCTION EXPRESSION

//SECOND

var store = (function (x){
    console.log(x)
})(10)

//arrow function

//  () = {}

var arrow =(x)=> {console.log(x);
}
arrow ("arrow function")



//TASKS

// 2)

var square = (x) => {x * x;

console.log(square(2)); 
}
// 1)

var square = (x) => x * x;

    console.log(square(2)); 
    

    //