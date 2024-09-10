// for(i =1;i<=10;i++){
//     // console.log(i);
// }

// // for (let i =1;i<=20;i++){
// //     if(i == 5){
// //         console.log("Detected 5");
// //        break
// //     }
// //     console.log(`Value of i is : ${i}`);
// // }
// for (let i =1;i<=20;i++){
//     if(i == 5){
//         console.log("Detected 5");
//        continue
//     }
//     console.log(`Value of i is : ${i}`);
// }



//----------------------------

// // while loop
// let i = 0
// while (i <= 10) {
//     console.log(`value of i: ${i}`);
//     i = i+2
// }


// // d0 while loop
// let score =1
// do{
// console.log(`Score is ${score}`);
// score++
// }while(score<=10)



//======================================================================================================================

// for of loop
const arr = [1,2,3,4,5,6,7]
for (const i of arr) {
    //console.log(i);
}



//Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "united state of america")
map.set('Fr', "france")

// console.log(map);

for (const [key,value] of map) {
   // console.log(key, ':-', value);
}

const myObject ={
    js: 'javascript',
    cpp :'c++',
    rb :'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
   //console.log(myObject[key]);
}

const prog = ["js",'rb','c','python','java']

for (const key in prog) {
    //console.log(prog[key]);
}

// for each loop=======================

const coding = ["js",'rb','c','python','java']
// coding.forEach(function (val){
// console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })


function printMe(item){
   // console.log(item);
}

coding.forEach(printMe)

coding.forEach(()=> {})



//----------------------

const mycoading =[{
    languagename: "javascript",
    languagefilename: "js"
},{
    languagename: "python",
    languagefilename: "py"
},{
    languagename: "java",
    languagefilename: "java"
}]

mycoading.forEach((item) => {
    console.log(item.languagename);
})