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
class user{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    
    getPassword(){
        let pass=this.password;
        let val='*';
        for(let i=0;i<pass.length;i++){
            pass;
        }
        return pass
    }
    setPassword(password){
        for(let i=0;i<password.length;i++){
            if(this.password.length>=8 &&this.password.charAt(0)===this.password.charAt(0).toUpperCase && !isNaN(this.password[i]) && password[i] !==' '  ){
                return this.password
        }else{
            return false
        }

        }
    }
}
const myUser=new user('mithun','MyPass123')
console.log(myUser.setPassword('MyPass123'))