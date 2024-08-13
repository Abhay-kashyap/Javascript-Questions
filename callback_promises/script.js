// Question : 1
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.
function TakesArray(arr,doubleFn){
    console.log('insise takes array')
    return doubleFn(arr);
    
}
function doubleFn(arrs){
  return arrs.map((e)=>{
    return e*2
   })
   
}
let arr=[1,2,3,4,5];

// let doubledArr=TakesArray(arr,doubleFn)
// console.log(doubledArr)

// questions 2
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.

function manipulateString(str,logString){
    return logString(str)
}
function logString(val){
    return val.toUpperCase()
}
// console.log(manipulateString('hello, world !',logString))

// question3
/*Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays.
The ageInDays function should then return a callback function that logs a message to the console. The
message should include the person's full name and age in days, and should be in the format: "The person's full
name is [full name] and their age in days is [age in days]."
Note that the ageInDays function should not log the message to the console directly, but should instead return
a callback function that can be used to log the message at a later time.*/



function ageInDays(person,logResult){
    let fullName=`${person.firstName} ${person.lastName}`
    let ageInDay=person.ageInYears * 365
    return logResult(fullName,ageInDay)
}
function logResult(fullName,ageInDay){
 console.log(`The person's full name is ${fullName} , and their age in days is ${ageInDay}`)
}


const person={
    firstName:'Mithun',
    lastName:'S',
    ageInYears:20
}
// ageInDays(person,logResult)

// Question 4
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.
const books=[
    {
        title:"Four Stars of Destiny",
        author:'General Manoj Mukund Naravane',
        year:2023
    },
    {
        title:'The Golden Years',
        author:'Ruskin Bond',
        year:2023
    },
    {
        title:'Lal Salam',
        author:'Smriti Irani',
        year:2022
    },
    {
        title:'Names of the Women',
        author:'Jeet Thayil',
        year:2021
    }
]
function listBook(books,callback){
    const newList=books.map((book)=>{
       return book.title
    })
     callback(newList)
}
function logList(v){
    
    let titleInOrder=v.sort()
    console.log(titleInOrder)
}
listBook(books,logList);

// question 5
/** You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!". */

function greet(name){
    return new Promise(function exec(resolve,reject){
      const greeting=`Hello , ${name}!`;
      resolve(greeting)  
    })
}
greet('Mithun').then(function(message){
    console.log(message)
}).catch((v)=>{
    console.log('handled err' ,v)
})

// Questions 6
/**Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console. */

async function fetchData() {
    const resposnse=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data=await resposnse.json();
    console.log(data)
}
fetchData()

// Question 7
/**Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs. */

async function getCombinedData(){
const [data1,data2]=await Promise.all([fetch('https://jsonplaceholder.typicode.com/posts/1').then((respose)=>respose.json()
),
fetch('https://jsonplaceholder.typicode.com/posts/1').then((respose)=>{
   return respose.json()
}),
]);
const combinedData={
    todo:data1,
    post:data2,
};
return combinedData;
}
getCombinedData().then((data)=>{
    console.log(data)
})
