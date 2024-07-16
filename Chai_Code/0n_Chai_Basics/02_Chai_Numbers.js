let num = new Number(25.189898)
let Indnum = 10000000

console.log(typeof(num))
console.log(num.toString())
console.log(num.toPrecision(4)) // returns a String of the number rounded off to the nearest value of the specified precision number
console.log(num.toFixed(2)) // returns a String of the number fixed to the nearest value of the specified precision number after decimal point
console.log(Indnum.toLocaleString("en-US")) // returns a String of the number with commas according to the specified locale

console.log(Math.floor(num.toFixed(2))) // returns a number with the value rounded off without decimal
console.log(Math.max(num, Indnum))
console.log(Math.max(1,2,3,4,5,6,7,8,9))

console.log("Random Number :" + Math.floor ( Math.random() * 10) + 1)   // range is 1-10
// Math.floor(Math.random() * (max-min)) + min              ; max-min : range       ; +min : starts atleast from min value