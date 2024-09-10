// // //singleton
// // // Object.create

// const mysym = Symbol("%%")
// const jsuser ={name:"Arvind kumar",
//     age:18,
//     [mysym] :"%%",//symbol key and print it
//     location:"hp",
//     email: "manu@gmail.com",
//     log:false
// }//empty object

// // console.log(jsuser.email);
// // console.log(jsuser["email"]);

// // console.log(typeof jsuser[mysym]);

// // console.log( jsuser[mysym]);

// jsuser.email = "arvind@chatgpt.com"
// console.log(jsuser.email);
// //  Object.freeze(jsuser)     //freez object
//  jsuser.email= "myboss@good.com"
// //  console.log(jsuser);

//  //function

//  jsuser.greeting = function()
//  {
//     console.log("hello js user");
//  }
 
//  jsuser.greetingTwo = function()
//  {
//     console.log(`hello js user,${this.name}`);
//  }
//  console.log(jsuser.greeting());

//  console.log(jsuser.greetingTwo());

// 2nd part--------------------------------------------------------------------------------------------------------------------------

// const tinderuser = new Object()// they both show same result only differnce is it is a singleton object
const tinderuser ={}// and it is non singleton object(const is used for declration)

 tinderuser.id = "123456abc"
 tinderuser.name ="Arvind"
 tinderuser.isLoggedIn =false
console.log(tinderuser);

const regularuser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Arvind",
            lastname:"Thakur"
        }
    }
}
// console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"g",4:"l"}

const obj4= {8:"g",6:"l"}
// const obj3 = Object.assign(obj1,obj2)
const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3);



user[1].email
console.log(tinderuser);




