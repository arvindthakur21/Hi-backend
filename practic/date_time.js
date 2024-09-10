// let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let mycretedDate =new Date(2000,0,21)
// console.log(mycretedDate.toString());

let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(mycretedDate.getTime());
// console.log(Math.floor((Date.now())/1000));

let newDate =new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})  



