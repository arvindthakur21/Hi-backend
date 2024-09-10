const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
            console.log("febuary");
            break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("no month");
        break;
}


//=====================================

//falsy value
// false,0,-0, BigInt 0n , "" , null, undefined , Nan

//truthly value
// "0" , 'false' , " " , [] , {} , function(){}

const emtyobject = {}
if (Object.keys(emtyobject).length == 0) {
    console.log("object  is empty");
}

// Nullish Coalescing Operator (??) : null undefined
  
let val1;
val1 = undefined ?? 10

console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")