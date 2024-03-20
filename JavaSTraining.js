console.log("Hello World") //print value 
let data1 = 10
let data2 = "telusko"
let data3 = 10.5
let data4 = 2e10
console.log(Number.MAX_VALUE)
console.log(5 < 2)
console.log(typeof data3) //data types
/* falsey values--> 0,null,undefined,Nan || boolean(falsy values)=false
truthy values --> All numbers,etc || boolean(truthy valus)=true*/




let var1 = 5
console.log(var1, typeof var1)
var1 = String(var1)
console.log(var1, typeof var1)
var1 = Boolean(var1)
console.log(var1, typeof var1)
var1 = "14 simmy"
console.log(parseInt(var1), typeof var1) //type conversion,coercion 




console.log(5 + 5)
console.log(5 - 5)
console.log(5 * 5)
console.log(5 / 5)
console.log(5 % 5)
/* + concatenates string and adds numbers but with other values(truthy & falsy) convetrs them to number */




console.log(3 != 3)
let bool1 = true
let bool2 = false
console.log(bool1 + bool2)
console.log((5 > 6) + (6 > 5)) //arithmetic operations
//to get last digit--> num%10
//to remove last digit--> parseInt(num/10)




console.log(3 > 2)
console.log("2" > 5)
console.log("pen" > "paper")
console.log(3 == 3)
console.log("3" == 3)
console.log('' == false)
console.log("3" === 3) //relational operation
/* for Number-Number --> usual
for Number-String --> converts string to number
for String-String --> checks each chacters ascii value 

we use === instead of == to strictly check for equality
== checks irrespective of their data types*/



console.log(3 > 5 && 5 < 3)
console.log(3 > 5 || 5 > 3)
console.log(!(3 > 5 || 5 > 3)) //logical operation
/* && AND - || OR - ! NOT */




if (3 > 4)
    console.log("True")
else if (4 > 3)
    console.log("else if block")
else
    console.log("false")

let tern = 5 >= 4 ? "true" : "false" //conditional operation
//Switch as usual






let num1 = 9
let num2 = 9
let res = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${res}`) //template literal




let cnt = 0
cnt += 5
console.log(cnt)

const pi = 3.141
let a = 10
let b = 10
console.log(pi) //pi is constant & cannot be changed
console.log(cnt + a + b) //arithmetic with variables






/* --------------------------------------------- */





let obj1 = {
    //key:value 
    name: 'Butter_Paws',
    tech: 'JS',
    work_exp: 5,
    'post off': 'ceo',
    hobby: {
        games: 'badminton',
        mob_games: 'Cod',
        leisure: 'travel',
    }
} // Objects in JavaScript & objs in objs

console.log(obj1.name) //using obj_name.key
console.log(obj1['post off']) //using obj_name['key']

delete obj1["post off"] //delete keyword
console.log(obj1)

for (let key in obj1) {
    console.log(key, obj1[key]) // obj1.key does not work
}

/* --------------------------------------------- */

let mul = 7
function table5() //func1
{
    console.log(mul * 5)
}
table5()


function return1(s) //func2
{
    return `return ${s}`
}
let s = 'String'
let str1 = return1(s)
console.log(str1)







let func_exp = function (a, b) {
    return a + b
} // function expression
let result = func_exp('JS', 'telusko')
console.log(result)







let arr_func = () => {
    console.log('Telusko teaching')
    return 100
} //arrow function in JS
console.log(arr_func())







let obj2 = {
    username: 'Telusko',
    height: 165,
    weight: 78,

    hobby: function (u) {
        console.log(`My name is ${u}`)
        console.log(obj3.username)
    }
} // Methods in javaScript
obj2.hobby(obj2.username)

let obj3 = {
    username: 'Telusko nr',
    height: 155,
    weight: 71,

    hobby: function (u) {
        console.log(`My name is ${u}`)
        console.log(this.username)
    }
} // this keyword refers to the keys of the object 
//that is calling the function
obj3.hobby(obj3.username)








let laptop1 = {
    cpu: 'i9',
    ram: 8,
    brand: 'HP',
    getconfig: function () {
        console.log(this.cpu, this.ram, this.brand)
    },
    compare: function (oth) {
        if (this.ram > oth.ram)
            console.log('Laptop1 good')
        else
            console.log('laptop2 good')
    }
}

let laptop2 = {
    cpu: 'i6',
    ram: 16,
    brand: 'Dell',
    getconfig: function () {
        console.log(this.cpu, this.ram, this.brand)
    }
}

laptop1.getconfig()
laptop2.getconfig()

laptop1.compare(laptop2) // using this keyword to compare 
// two objects having same properties







function Alien(name, power) {
    this.name = name
    this.power = power
    this.work = () => {
        console.log('destroy earth')
    }
} // Constructor (function Function_name)

let alien1 = new Alien('telusko', 'gravity manipulation')
console.log(alien1)
let alien2 = new Alien('CodeCamp', 'Wind')
alien2.power = 'atomic destoration'
console.log(alien2)
let alien3 = new Alien('Programmiz', 'cosmic nova')
console.log(alien3)
// new keyword helps to create new objects such that
// any changes in one object does not affect other objects







let arr = [1, 2, 3, 4, 5] // Num array
let el = arr[4] // this give the element of the array at index 4
console.log(arr)

arr.push(6)
arr.push(7) // push 
console.log(arr.pop()) // pop (removes from the end)

console.log(arr.shift()) // shift (removes from the start)
console.log(arr.unshift(1)) // unshift (adds a value to the beginning of the array)
arr[7] = 8 //adding values to array

console.log(arr.splice(1, 2)) // var.splice(index,no. of elements) (removes some values from the index number mentioned)
console.log(arr[5]) // Arrays  


let mix_arr = ['telusko', 2.1, { tech: 'JS' }, () => { console.log("one shot js") }] // Array with different data types
console.log(mix_arr[2])
mix_arr[3]() // accessing different data types in array



let a_name = "Redragon"

let n_ar = Array.from(a_name)
console.log(n_ar) // Array.from gets the elements fronm the object to array type



for (let n of arr) {
    console.log(n)
} // for of gives the elements of the array 

for (let m in arr) {
    console.log(m)
    console.log(arr[m])
} // for in gives the index number of the arrays

arr.forEach((n, ind, arr) => {
    console.log(n, ind, arr)
}) // forEach method sends individual values to the function inside and
// we can use it to perform any operations


let des_arr = [2, 4, 6, 8, 10]
let [v1, v2, v3, v4, v5] = des_arr
console.log(v5, v4, v3, v2, v1) //destructuring an array

let n1 = 10
let n2 = 15
[n1, n2] = [n2, n1] // swapping two values using destructuring of arrays

let string1 = 'Telusko teaching JS on youtube'.split(' ') // spilt op used to
// convert string to array 
let [v10, v11, v12, v13, v14] = string1
//[v10,,v12,,...v14]  (...) op means the rest elements of array

let fil_arr = [42, 11, 21, 22, 14, 57, 55, 6, 34, 331]
let ans = fil_arr.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .forEach(n => {
        console.log(n)
    }) // filter method checks for every value  and their condition(T or F) and pass them ahead
    // map method changes valueof every element and pass them ahead
    .reduce((a, b) => a + b)
console.log(ans)







let set_arr = new Set() //Set operation

set_arr.add("telusko")
set_arr.add(3)
set_arr.add(2)
set_arr.add(1)
set_arr.add(89.02)
set_arr.add(true) //add method in set

console.log(set_arr)

set_arr.forEach(n => {
    console.log(n)
})

console.log(set_arr.has(4)) // has method in set





// How to get random variables

Math.floor(Math.random() * upperlimit) + 1 // +1 if you want to include the upperlimit
















/* --------------------------------------------- */













// alert()- part of BOM, pops up on the screen to show any msg

// prompt- part of BOM, it takes input from the user and gives it in form of string

// confirm- asks the user for permission to perform certain tasks. It returns true or false based on whether the user clicked OK or Cancel button

// alert("This is an alert")
// let al= prompt("Enter a value for al:")
// al= Number.parseInt(al)
// let write= confirm("Do you want to print the value?")
// if(write)
// document.write(al+ " - " +typeof(al))
// else
// document.write("Value cannot be printed")




// window()- parent/global object of all. Contains BOM/DOM/JS core features
// BOM- Browser object model
// DOM- Document object model







/*---------------------------------------------------- */






// Walking the DOM

// obj.firstchild()- gives the first child of the object(includes comments and texts)
// obj.firstElementChild()- gives the first element child of the object

// obj.lastchild()- gives the last child of the object(includes comments and texts)
// obj.lastElementChild()- gives the last element child of the object

// obj.childNode()- gives the child node of the object(includes comments and texts)

// obj.parentnode()- gives the parent of the element
// obj.parentElement()- gives the parent element of the element

// obj.nextSibling()- gives the next sibling of the element
// obj.nextElementSibling()- gives the element sibling that comes after current node

// obj.previousSibling()- gives the sibling that comes before current node
// obj.previousElementSibling()- gives the element sibling that comes before current node









/*---------------------------------------------------- */










// Searching the DOM


/*

1.  document.getElementByClassName("Class_name")- gets the first element with same class name
    document.getElementsByClassName("Class_name")- gets all the elements with same class name

2.  document.getElementById("id_name")- gets the element with same id name

3.  document.querySelectorAll("selector")- returns a collection of elements, which matches selectors
    Selector Example: .class , #id , *   etc..

4.  document.getElementsByTagName("tag")- returns a collection of elements with specified tag name
    Tag Example: div , p , h1   etc..
    
*/














/* 

1. element.matches(selectors)- gives true or false based on whether the element matches or not
   Example selectors: .class , #id , * etc..

2. element.closest(selectors)- it goes up in the dom tree and finds the closest ancestor who matches the selector, starts from the element itself

3. element.contains(selectors)- returns true or false based on whether the element contains any element matching the selector

*/












/*

1. element.innerHTML- gives the html code written inside the element, we can also change the html content using this

2. element.outerHTML- gives the html code written outside the element including th element iotself

3. element.textContent- gives the text written inside the element

*/















/*

1. element.getAttribute("attr")- returns the value of attribute "attr" if it exists otherwise null

2. element.setAttribute("attr","value")- sets an attribute to the element

3. element.removeAttribute("attr")- removes the attribute from the element

4. element.hasAttribute("attr")- returns true if attr exist in the element otherwise false

5. element.getAttributeNames()- returns array of all attributes present in the element

// to set your own custom attributes
6. <element id="element" data-newAttr="random value" ></element>
   element.dataset.newAttr- gives the new attribute value

*/

















/* 

1. document.createElement('div')

2. element.append(ele)- creates a new element 'ele' at the end of the element 

3. element.prepend(ele)- creates a new element 'ele' at the beginning of the element

4. element.after(ele) - creates a new element 'ele' after the element

5. element.before(ele) - creates a new element 'ele' before the element

6. element.replaceWith(ele)- replaces the element with the new element 'ele'
 
*/














/*

1.  element.className- changes or gives the element all declared class names

2. element.classList- gives the list of classnames of the element

3. element.className.add("mewClassName")
   element.className.remove("mewClassName")
   element.className.contains("ClassName")
   element.className.toggle("ClassName")- if present removes the class, if absent adds the class
 
*/
















/*

1. setTimeout(function(){------},duration, <arg1>, <arg2>,...args)
   clearTimeout(var)                ;var=settimeout function
   -It performs the given function after the specified duration

   let a= setTimeout(function(){
        alert("This alert is after 3s of settimeout")},3000
    )

    clearTimeout(a)

2. setInterval(function(){------},duration,...args)
   clearInterval(var) 
   -It performs the given function every time in the specified interval of time

    let a= Math.floor(Math.random()*10)
    let b= Math.floor(Math.random()*10)

    setInterval((a,b)=>{alert("Sum"+(a+b))},2000,a,b)
*/




















/*  Events: Something that happens in jS is an event
    Mouse Events, Keyboard events, form events, document events
    eg. onclick=funcion(){-------}- when user clicks on an element with onclick event

    <div class="container" onclick=alert("The Div is clicked") onmouseenter=prompt("Did u enter the container div?")>Click Here</div>

1. element.addEventListener("event",handler)
   element.removeEventListener("event",handler)- same parameters as the event to be deleted should be given 
   eg. element.addEventListner("hover",x)
       element.removeEventListener("hover",x)  - x:function()
*/




















/* Synchronous and asynchronous function
    Synchronous functions are those which return value once they have completed their execution, they are executed immediately
    Eg.  alert(), confirm(), prompt()- synchronous
    Asynchronous functions don't complete immediately; they return before completing their execution, they will execute eventually
    Eg.  fetch(), XMLHttpRequest().send()- asynchronous

1. callback()-A callback function is a function passed into another function as an argument, which is then invoked inside the 
    outer function to complete some kind of routine or action.

Error Handling:
    .onerror = function(){ ... }
    This property sets up a function that will handle any errors generated by scripts anywhere within the window

function loadScript(src, callback){                 // outer function
    var script = document.createElement("script")
    script.src=src
    script.onload = function(){                 
        alert("Script loaded: "+src)
        callback(src)
    }

    script.onerror=()=>{                            //  .onerror- if errror detected this function will execute
        alert("Error loading the script.")
        callback(new Error("Src is not working"))
    }                                               
    document.body.appendChild(script)               //   script is loaded to the document
}

function f1(src){
    alert("Callback func1 "+src)
}

function f2(error,src){
    if(error)
    console.log(error)
}

loadScript("https://code.jquery.com/jquery-3.5.1.js",f1)
loadScript("https://code.jqueery.com/jquery-3.5.1.js",f2)


callback hell/pyramid of doom-

Each function gets an argument which is another function that is called with a parameter that is the response of the previous action.
In addition to having code that is difficult to maintain, the DRY principle has absolutely no value in this case. Error handling, for example, 
is repeated in each function and the main callback is called from each nested function.

That’s where native JavaScript Promises come in.

2. Promise-The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
   -it helps in parallel execution of multiple threads in the script 

   A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

    The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). 

let p1=new Promise((resolve, reject) => {
    console.log("Promise 1")
    setTimeout(() => {
        alert("Resolved")
        resolve("P1 resolved")
    }, 5000)
})

p1.then((value) => {                    // value is the value passed to resolve()
    console.log(value)
    let p3 = new Promise((resolve,reject)=>{
        console.log('promise 3')
     })
     return p3
     }).then((value)=>{                    // Promise chaining(.then())-
         console.log("we are done")
         return 45
   }).then((value)=>{
       console.log("Surely done")
 })

let p2=new Promise((resolve, reject) => {
    console.log("Promise 2")
    setTimeout(() => {
        reject(new Error("Error in promise 2"))
    }, 5000)
})

p2.catch((error)=>{
    console.log(error)
})

or

p2.then((value)=>{                      // we can use catch() or use then() to handle errors 
    console.log(value)
},(error)=>{
    console.log(error)
})

making loadscript using promises:

const loadScript  = (src)=>{
    return new Promise((resolve, reject)=>{
        let script=document.createElement("script")
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            reject(false)
        }
    })
}

let p1=loadScript("https://code.jqueery.com/jquery-3.5.1.js")
 p1.then((value)=>{
    console.log(value)
 }).catch((error)=>{
    console.log("We are sorry for the inconvinence")
 })

attaching multiple handlers to a promise:

let p1= new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("resolve1")
    }, 3000),
    setTimeout(() => {
        resolve(200)
    }, 5000)
})

p1.then((value)=>{                      // p1.then() x1
    console.log("resolve console")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(404)
        },8000)
    })
}).then((value)=>{                      // .then() chaining
    alert(value)
})

p1.then((value)=>{                      // p1.then() x2
    alert(value)
})
p1.then((value)=>{                      // p1.then() x3     Multiole handlers attached to p1(series execution)
    console.log(value)
})

*/













/* Promise API- 6 primary methods

1. Promise.all([p_array])- gives an array of promises and returns a single promise that resolves to an array containing the result of each 
   promise(resolved). if any promise is rejected then the state of that promise object becomes rejected and it gives us the error.

2. Promise.allSettled([p_array])- gives an array of promises and returns us status and value of each promise.

3. Promise.race([p_array])- gives the status and value of the first promise to settle.

4. Promise.any([p_array])- gives the status and value of the first promise to resolve.

5. Promise.reject(p)- makes a promise that rejects with the specified reason.

6. Promise.resolve(p)- makes a promise that resolves to the given value. If the argument is also a promise, it will be returned.

*/















/* Async await- we can make any function async and delay some of its code parts
                It always returns a promise

async function weather(){
    let delhiWeather= new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("34 deg")
        },3000)
    })

    let puneWeather= new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("28 deg")
        },5000)
    })

    console.log("Weather report 1:")
    let delhiW = delhiWeather
    console.log(`Delhi Weather: ${delhiW}`)

    console.log("Weather report 2:")
    let puneW =await puneWeather
    console.log(`Pune Weather: ${puneW}`)

    return [delhiW, puneW]
}

let w=weather()
w.then((value)=>{
    console.log(value)
})


*/












/* Error handling- try, catch() and finally()
    try() does not work if the code inside is asynchronous/scheduled
    finally- it runs the code in all cases

custom error handling-

try{
    let p= prompt("Enter your age: ")
    p=Number.parseInt(p)
    if(p>100)
    throw new ReferenceError("Age not true")
}
catch(error){
    console.log(error.stack)
}


*/