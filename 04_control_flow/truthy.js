
const userEmail = []


if(userEmail){

    console.log("Got user email");

}else{

    console.log("Don't have user email");
    
}

// falsy values

// false,0,-0, BigInt 0n,"",null,undefined,NaN

// truthy values

// "0","false"," ", [],{},function(){}

// if(userEmail.length==0){

//     console.log("Array is empty");
    
// }


const emptyObj = {}

if(Object.keys(emptyObj).length==0){

    console.log("Object is empty");
    

}


// Nullish coalescing Operator (??) null undefined
 
let val1;
// val1 = 5??10;
// val1 = undefined ?? 15;

console.log(val1);

// Ternary Operator

// condition ? true:false


const iceTeaprice = 100;

iceTeaprice>=80 ? console.log("less than 80 "):console.log("more than 80");
