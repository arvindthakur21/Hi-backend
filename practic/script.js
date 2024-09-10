// console.dir(document.body.childNodes[1]);
// console.log(document.body);

//dom menupulation

// let heading=document.getElementById("heading");
// console.log(heading);

// console.dir(document.body.firstChild);.

let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log(e);
   
}

let div = document.querySelector("div");
div.onmouseover =() => {
    console.log(" you are inside div");
}