
// object literals
const mySym = Symbol("SymKey")

const obj = {
    name : "Poo",
    age : 36,
    country: "USA",
    alive : true,
    [mySym] : "ObjSym",
    "skill" :["JS", "React"]
}




//accessing the property using dot notation
console.log( obj.name, obj.age, obj.country)




//accessing without using dot notation, dot notation could not verify skills 
console.log(obj["skill"], obj["name"])





//Accessing symbol properties
console.log(typeof obj[mySym])




obj["name"] = "Dragon Warrior"
console.log(obj["name"])





// Object.freeze(obj)  // Any further changes will not be registered
console.log(obj)





obj.greeting = function(){
    console.log(`hi my name is ${this.name} and im ${this.age} years old `);        // this keyword refers to the current obj and gives us access to all its properties
}
console.log(obj.greeting());




const newObj = {}
newObj.name = "Lelolelo"
newObj.age = 23
console.log(newObj)



const SuperObj = {
    officialName : {
        userName : {
            fName : "First",
            lName : "Last"
        }
    }
}
console.log(SuperObj.officialName.userName.fName)   // object chainning





const obj1 = {
    name: "John Doe",
    age: 30,
}
const obj2 = {
    name1: "Doe John",
    age1: 20,
}
const objAssign = Object.assign({}, obj1, obj2)    // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. if the objects have same keys then it gets the latest value of the key (used rarely)
// the {} is the target where the obj1 and obj2 are merged into one single object and gives us a new object
console.log(objAssign)  // o/p - { name: 'John Doe', age: 30, name1: 'Doe John', age1: 20 }

const objSpread = {...obj1, ...obj2}    // o/p - { name: 'John Doe', age: 30, name1: 'Doe John', age1: 20 }
console.log(objSpread)




// objects in array
const ObjArr = [{1:"one", 2:"two"},{3: "three",4:"four"}, {"5":"five"}]
console.log(ObjArr)
console.log(ObjArr[1]['4'])



// Accessing nested arrays and objects inside an array of objects
console.log(Object.keys(ObjArr[0]))
console.log(Object.values(ObjArr[1]))
console.log(Object.entries(ObjArr))     // the index of the object are the keys





// De-Structuring an Object
const course = {
    course_name : "JScript",
    price : 999, 
    corse_Teacher :  "Mr. Smith"
}

const {price : new_price} = course
console.log(new_price) // after de-structuring the object , we can get the value of object in new variables




// Functions
function loginName(username = "Sai"){       // default name given if no argument is passed
    return `Welcome, ${username} just logged in`
}

console.log(loginName())


function addCart(v1,...num){        // v1->1 , num->2,3,4,5,6,7,8,9,10
    return `${v1},${num}`
}

console.log(addCart(1,2,3,4,5,6,7,8,9,10)) 



// function hoisting
console.log(add1(10))   // this works as the function is declared only

function add1(v1){      
    return v1+=1
}

console.log(add1(2))    // this works as the function is declared only (2)



// console.log(add2(10))   // this does not works as the function is in an expression and a variable holds it 

let add2 = function(v1){      
    return v1+=2
}

console.log(add2(2))    // this works as the function is declared only (3)




// this and arrow function 

const user = {
    username : "Chai & Code1",
    price : 999,
    welcomeMsg : function ( ){
        console.log(`${this.username} , welcome to our website`)
        console.log(this)
    }

}


user.welcomeMsg()
user.username = "Lele"     
user.welcomeMsg()

// this keyword doesnt work inside a function, but an object

const arrowAdd = (a1, a2) => (a1 + a2)  // implicit arrow function, return not used as parentheses is used
console.log(arrowAdd(2,3))


// IIFE - immediatly invoked function expression

const le = () => ("IIFE")
console.log(le())


(function chai() {
    console.log("IIFE");
})();       // o/p - IIFE

((name) => {
    console.log(name);
})("LELELE")       // o/p - LELELE 
// to reduce global variable polution we use IIFE




