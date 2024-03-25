//JSON-JAVASCRIPT OBJECT NOTATION-data interchanging format
//used to exchange data btw a server and a web app
//Json files {key:value} or [value1,value2,value3]-i.e. may be key value pair object or an array

//JSON.stringify()=converts a JS object to a JSON string
//JSON.parse()=converts a JSON string to a JS object


const jsonnames=`["Spongebob","Patrick","Squidward","Sandy"]`

const jsonperson=`
{
    "name":"Spongebob",
    "age":30,
    "isEmployed":true
}`

const jsonpeople=`[
    {
        "name":"Spongebob",
        "age":30,
        "isEmployed":true
    },
    {
        "name":"Patrick",
        "age":34,
        "isEmployed":false
    },
    {
        "name":"Squidward",
        "age":50,
        "isEmployed":true
    },
    {
        "name":"Sandy",
        "age":27,
        "isEmployed":false
    }
]`

// converts json strings into json objects
// const jsonString=JSON.parse(jsonperson);
// console.log(jsonString);


// fetching a json file
fetch("people.json")
.then(response=>response.json())
.then(values=>values.forEach(value=>console.log(value.isEmployed)))
.catch(error=>console.log(error))