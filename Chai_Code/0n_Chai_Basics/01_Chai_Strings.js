// modern syntax to write string using ` `

let str ="String String+1 String-2   "
console.log(`Writing mordern ${str} syntax`)

//Imp String functions and their uses

console.log(str.toUpperCase())
console.log(str.localeCompare("String String+1 String-2 String*3  "))   // returnns 0 if the string is equal , -1 if left string is smaller than right, 1 if left string is bigger than right
console.log(str.indexOf("-2"))  // returns the starting index number of the string passed if present, -1 if not present
console.log(str.concat("New String"))  // returns the original string with a new value appended
console.log(str.replace("S","X"))   // replaces the 1st parameter with the 2nd parameter(the first appearance)
console.log(str.split("t",3))   // returns the array of strings after splitting the string at each occurrence of 't' upto given no. of elements specified
console.log(str.trim())     // removes any leading or trailing whitespace from a string
console.log(str.normalize("NFC"))