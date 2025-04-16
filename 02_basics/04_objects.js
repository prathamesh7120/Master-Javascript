
// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "prathamesh"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {

    email:"prathamesh@gmial.com",
    fullname: {

        userfullname:{

            firstname:"prathamesh",
            lastname:"chavan"

        }

    }

}


// console.log(regularUser.fullname.userfullname.firstname);


const Obj1 = {1:"a",2:"b"}
const Obj2 = {3:"A",4:"B"}


// const Obj3  = Object.assign({}, Obj1, Obj2);

// console.log(Obj3);

const Obj3 = {...Obj1,...Obj2}

// console.log(Obj3);



const users =  [

    {
        id:1,
        email:"prathamesh@gmail.com"
    },

    {
        id:2,
        email:"prathamesh@gmail.com"
    },

    {
        id:3,
        email:"prathamesh@gmail.com"
    }

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {

    coursename:"Js In Hindi",
    price:"999",
    courseInsructor:"hitesh"
}

// course.courseInsructor


const {courseInsructor:instructor} = course

// console.log(courseInsructor);

console.log(instructor);


// destructring
// const navbar =  ({company}) => {



// }

// navbar(company ="hitesh")


// {
//     "name":"hitesh",
//     "coursename":"Js IN HINDI",
//     "price":"free"
// }

// {
//     {},
//     {},
//     {},
// }