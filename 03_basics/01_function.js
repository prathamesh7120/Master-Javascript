
function sayMyName() {

    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");

}



// sayMyName();
    

// function addTwoNumbers(num1,num2){


//      console.log( num1+num2);
     
// }

function addTwoNumbers(num1,num2){


    // let result = num1+num2;
    // return result;

    return num1 + num2;
    
}

 const result = addTwoNumbers(3,4);

//  console.log("Result:",result);
 

function loginUserMessage(username="sam"){

    if(username === undefined){

        console.log("please enter the username");
        return 

    }
    return `${username} just logged in`

}
    
    
// console.log(loginUserMessage("prathamesh"));
    
// console.log(loginUserMessage("prathamesh"));
    
function calculateCartPrice(val1, val2, ...num1){

    return num1


}

// console.log(calculateCartPrice(200,400,500,2000,5000));


const user= {

    username: "hitesh",
    price:199

}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    


}
    
// handleObject(user);


handleObject({

    username:"sam",
    price:399

})


const myNewArray = [200,400,100,600]


function returnsecondvalued(getArray){

    return getArray[1]


}

// console.log(returnsecondvalued(myNewArray));

    
console.log(returnsecondvalued([200,400,100,600]));


