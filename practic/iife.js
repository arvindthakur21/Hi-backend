// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    //named iife
    console.log(`DB CONNNECTED`);
})
();
// what is iffe => those function who is imediatle execute,becuase of problem of global scope pollution,iife does not know where to stop so 
//stoping this we use (;) semi colon

// arro function
((name) => {
    //unnamed iife
    console.log(`DB CONNETED TWO ${name}`);
})('Arvind')

