// when spread operator is used as a parameter,it is known as the 'rest parameter'

function sum(a,b,c){
    console.log(a+b+c);
}
const num=[2,5,6,7,8];
sum(...num);

// Note:if you pass multiple argument using spread operator the function takes the required argument and ignores the rest.



// Note:using the rest parameter will pass the argumnet as array elements


let func=function(...args){
    console.log(args);
}
func(34);





function funct(...vers){console.log(vers)}
let summ=[4,6,54,45,9];
funct(...summ);


