
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