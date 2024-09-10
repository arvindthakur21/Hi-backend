// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("hello");
// }
// setTimeout(hello,4000)  //timeout 2 second = 2000 milisecond/

//asyncronus programing
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// },4000);

// console.log("three");
// console.log("four");


//call back: an argument to the another function


// const hello =() => {
//     console.log("hello");
// }
// setTimeout(hello,2000);

//callback hell :=== nested callback accure 


// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3,() =>{
//             getData(4, ()=>{
//                 getData(5)
//             })
//         })
//     }) 
// });



//===========================================================
// promises : to fullfill callback





const getPromise = () =>{
return new promise = new Promise((resolve, reject)=>{
    console.log("I am a promise");
    resolve("sucess");
});
};
let promise = getPromise();
promise.then(() =>{
    console.log("promise fullfill");
})


