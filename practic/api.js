// fetch api chepter=13
// it provide interface for fetching resources
// it use request and response object

// fetch api is used for api calls
// api = application programming interface
const url ="https://cat-fact.herokuapp.com/facts";


const getfacts = async () =>{
    console.log("gettinf data......");
    let response = await fetch(url);
    console.log(response);
}