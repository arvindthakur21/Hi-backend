// function saymyname(){
//     console.log("A");
//     console.log("R");
//     console.log("V");
//     console.log("I");
//     console.log("N");
//     console.log("D");
// }
// // saymyname() 


// function addtwonumber(num1,num2){
//     console.log(num1 + num2);
// }
// addtwonumber(3,4)

// function loginuserMeaage(username){
//     if(username===undefined){
//         console.log("plese enter a username");
//         return
//     }
//     return`${username} just logged in`
// }
// console.log(loginuserMeaage());




function calculatecartprice(f,g,...num1){
    return num1
}
// console.log(calculatecartprice(2,3,4,5));

const user ={
    username:"Arvind",
    price:199
}
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and  price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username:"Sam",price:399
})

const myNewArray =[200,400,100,600]

function returnsecindvalue(getarry){
return getarry[1]
}

console.log(returnsecindvalue(myNewArray));
