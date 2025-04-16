
// Singleton 

// object literals



// declaration objects => declare in keys and values pair compulsory
const JUser = {
    name:"prathamesh",
    "full name":"prathamesh shankar chavan",
    age:24,
    location:"pune",
    email:"chavanprathamesh813@gmail.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

// access objects 

// console.log(JUser.email);
// console.log(JUser["email"]);
// console.log(JUser["full name"]);


JUser.greeting  = function(){

    console.log("Hello JUser");
    

}


JUser.greetingTwo = function() {

    console.log(`Hello JUser, ${this.name}`);
    

}


console.log(JUser.greetingTwo());




