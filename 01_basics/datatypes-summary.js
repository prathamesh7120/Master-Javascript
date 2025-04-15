
// primitive

// 7 types: string, number, boolean, null, undefined, symbol, BigInt


// Refrence type  (Non Primitive)

// Array , object ,function


let name = "prathamesh";

let anothername = name;

anothername = "Abhishek";

console.log(anothername);

let userOne = {

    email:"user@google.com",
    user:"user@ybl"

}

let userTwo = userOne;

userTwo.email = "prathamesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);


