          // CONCAT

const frnds = ["a","b","c"]
const frnds1 = ["d","e",]
const concat = frnds.concat(frnds1)
console.log(concat);


              //  SORT

const num = [5,4,6,2,3,1];
num.sort ((a,b)=>(a-b));
console.log(num);


                 //  SLICE

const cut = ["a","b","c"]
const slc = cut.slice(1,-1)
console.log(slc);


                //  SPLICE

var days = ["sun","mon","wed","fri","sat"];
days.splice (2,0,"tue");
days.splice (4,0,"thur");
console.log(days);


             //  SPLIT


const sentence = "hihowareyou"
const words = sentence.split("")
console.log(words);
