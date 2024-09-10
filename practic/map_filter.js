// const coding =["js","java","python","ruby","c","c++","R"]

// const val = coding.forEach((item) =>{
//     console.log(item);
//     return item
// })
// console.log(val);

// filter-----------

// const mynums =[1,2,3,4,5,6,7,8,9,10]
// const newnum = mynums.filter((num) => num>4 )
// console.log(newnum);

const mynums =[1,2,3,4,5,6,7,8,9,10]
// const newnum = mynums.filter((num) => {
//   return   num>4

// })

// const newnum =[]
// mynums.forEach((num)=>{
//     if (num > 4) {
//         newnum.push(num)
//     }
// })
// console.log(newnum);


//------------

const myNumbers =[1,2,3,4,5,6,7,8,9,10]
//  const newn = myNumbers.map((num)=> num + 10)

const newm = myNumbers
.map((num) => num * 10)
.map((num)=> num +1)

// console.log(newn);




//-----------------

// Reduce
 
const mynum = [1,2,3]

// const mytotal=mynum.reduce(function (acc, currval) {
//     console.log(`acc: `);
//     return acc + currval
// }, 0)

const mytotal =mynum.reduce((acc, currval) => { return acc+currval},0)

console.log(mytotal);



const shoppingcart = [
    {
    itemName: 'js course',
    price:2999
    },
    {
        itemName: 'java course',
        price:3999
        },
        {
            itemName: 'python course',
            price:1999
            },
            {
                itemName: 'data scientist course',
                price:12999
                }
]

const price2pay= shoppingcart.reduce((acc, item) => acc + item.price,0)
console.log(price2pay);