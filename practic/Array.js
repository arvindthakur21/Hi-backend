// const myArr = [0,12,3,3,4,5]
// console.log(myArr);

// myArr.push(6)
// console.log(myArr);
// myArr.push(8)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(8)
// console.log(myArr);
// myArr.shift(8)
//  console.log(myArr);
// console.log(myArr.includes(4));

// console.log(myArr.includes(89));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof(newArr));

//slice and splice

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
const marvel_heros = ["thor","captain America","spider man"]
const dc =["superman","flash","batman"]
// marvel_heros.push(dc)
// console.log(marvel_heros);
// const allhero = marvel_heros.concat(dc)
// console.log(allhero);
const allhero =[...marvel_heros, ...dc]
// console.log(allhero);
const anoarr =[1,2,3,[4,5,6,7],8,6,[4,6],[6]]

const relanoarr =anoarr.flat(Infinity)
console.log(relanoarr);




console.log(Array.isArray("Arvind"));
console.log(Array.from("Arvind"));