// Question 1
/*Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.*/
function convertToNumber(str){
    let num=parseInt(str);
    try{

        if(isNaN(num)){
            throw new Error(`invalid number`);
        }
        return num
    }catch(e){
        return e.message
    }
}
console.log(convertToNumber('123'));
console.log(convertToNumber('abc'));

// Questions 2
/*
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
*/


function getPerson(obj){
    try{
        if(typeof obj ==='object' && 'name' in obj && 'age' in obj && obj !==null){
            return `Name : ${obj.name} ,And age :${obj.age}`
        }
        throw new Error ('Invalid Parameter Type')
    }catch(e){
        return e.message
    }
}

console.log(getPerson({name:"Mithun",age:20}))
console.log(getPerson({name:"Mithun"}))
console.log(getPerson(['name','mithun']))
console.log(getPerson({}));


// question 3
class Car {
    company='skoda';
    model='rapid';
    year=2022
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}
const myCar=new Car();
console.log(myCar.getDescription());



// Question 4
class Employee{
   constructor(n,p,s){
    this.name=n;
    this.position=p;
    this.salary=s;
   }
    
    getSalary(){
        return `${this.salary}`
    }
}
const Employee1=new Employee('shubham' ,'Software Engineer',8000);
console.log(Employee1.getSalary());


// Question 5
class Person{
    constructor(n ='unknown',a=0){
        this.name=n;
        this.age=a;
    }
    getDetails(){
        return `Name : ${this.name} and Age : ${this.age}`
    }
}
const person1=new Person('Mithun',20);
console.log(person1.getDetails())
const person2=new Person();
console.log(person2.getDetails());


//questions 6 
class Calculator{
    static add(a,b){
        return a+b;
    }
}
// console.log(Calculator.add(5,10))

// question7
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.
class User{
    constructor(username,password){
        this.username=username;
        this._password=password;
    }
    getPassword(){
       
        return '*'.repeat(this._password.length);
    }
    setPassword(newPassword){
        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasNumber = /\d/.test(newPassword);
        const isValidLength = newPassword.length >= 8;
        if(isValidLength && hasUpperCase && hasNumber ){
            this._password=newPassword
        }
        else{
            console.error('Error :Pasword must be at least 8 character long and contains at least one number and one uppercase letter')
        }
    }
}
const user=new User('Mithun','Mypassword123');
console.log(user.getPassword())
// user.setPassword('myPassword');
// user.setPassword('MyPassword');
user.setPassword('Mypassword123');

// Q8
function Student(name){
    this.name=name;

}

Student.prototype.printDetails=function(){
    console.log(`Hello the student is ${this.name}`)
}
const student1=new Student('Mithun');
student1.printDetails()

//Q9
let arr=[1,2,3,4,5,6]
function numberChecker(arr){
    let value=arr;
return function(num){
    if(value.includes(num)){
        return true
    }else{
        return false
    }
}
}
const checkNum=numberChecker(arr);
console.log(checkNum(3))
console.log(checkNum(10))


// Q10
function filterByCatergory(products){
    let value=products
    return function(Category){
          return value.filter(product=>product.category==Category)
    } 
}
let products=[
    {name:'shirt',category:'Clothing'},
    {name:'pants',category:'Clothing'},
    {name:'Hats',category:'Accessories'},
    {name:'sunglasses',category:'Accessories'}
];
// const clothingProduct=filterByCatergory(products)("Clothing");
// console.log(clothingProduct)

// another way call 
const clothingProduct=filterByCatergory(products);
const filterProduct=clothingProduct('Accessories');
console.log(filterProduct)