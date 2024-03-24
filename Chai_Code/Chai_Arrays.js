
let myArr = [0,1,2,3,4,5]
// Shallow copies - copy of the array that share same refference point i.e any changes made in the copied array affect the original array
// deep copies - copy of the array that do not share same refference point i.e any changes made in the copied array do not affect the original array

let diffArr = ["string", 1, 2.3, true, null]
console.log(typeof(diffArr))




// // push / pop
// myArr.push(6,7,8,9)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)




// // shift / unshift
// console.log(myArr.shift())  // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr.unshift(33,34))   // Inserts new elements at the start of an array, and returns the new length of the array.

// console.log(myArr)





// // join 
// let joinArr = myArr.join()
// console.log(joinArr +" ----- "+typeof(joinArr))     // join converts to type string

// // slice / splice
// console.log(myArr.slice(2,5))   // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array

// let splicedArr = myArr.splice(3,5)  // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(`SplicedArr : ${splicedArr} --> OgArr : ${myArr}`)






// concat
console.log(myArr.concat(diffArr, [10,11,12,13]))  // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// spread array
let spreadArr = [...myArr, ...diffArr, ...[10,11,12,13]]
console.log(spreadArr)






// flat
let deepArr = [1,2,3,[4,5],6,7,8,[9,10,11,[12,13,14]]]
console.log(deepArr.flat(Infinity))






// covert to array
let ArrStr = "Array is A String"
console.log(Array.isArray(ArrStr))
console.log(Array.from(ArrStr))   // convert String to Array using .from() method of Array class
// cannot get array of objects, we have to specify whether to make aray of keys or values

let e1 = 119
let e2 = 120
let e3 = 121
let e4 = 122

console.log(Array.of(e1, e2, e3 ,e4))   // makes an array using the individual elements passed as parameters using .0f() method of Array class
