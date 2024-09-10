//Java script execution context
//js is single threaded
//global execution context
//function execution context
//eval execution context

//Run in two phases
// 1=> Memory creation phase(in this only space allocate for variable but not execute)
// 2=> Execution Phase (execute)

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

//How code run------------------
//(1) Global Execution (this)
//(2) Memory phase(allocate all variable )
//val1 -> undefined
//val2 -> undefined
// addNum -> defination
// result1 -> undefined
//  result2 -> undefined
// (3) Execution Phase
// val1 <- 10
// val2 <- 5
// addNum --> new variable environment + Execution thread  ---------------->Memory phase 
// val1-> undefined
// val2-> undefined
// total -> undefined
//---------> Execution context-->
// num1-> 10
// num2 -> 5
// total ->15
/* total return to global execution context
--global execution after working it is delelted


   */ 

