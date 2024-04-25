

// for of loop (on array)

const ofArr = [1,2,3,4,5,6,7,8,9];
// Takes the varName(gets each element) of the Object 
for (const num of ofArr) {
    // console.log(num); // type - number
    // console.log(`${num}`);    // type - String
}

// for of loop (on map only)
// Map - Array (set(), get(), delete(), keys(), values(), size)
const ofMap = new Map()
ofMap.set('one', 1)
ofMap.set('two', 2)
ofMap.set('three', 3)
ofMap.set('four', 4)
ofMap.set(5, "5")

ofMap.delete('four')

// for (const [l] of ofMap) {
//     console.log(ofMap.get(l))
// }

// Objects are not iterable by for of



// for in loop -
// Iterating objects - For in

const myObject = {
    lang : 'en',
    level : 'pro',
    code : 'JS',
    exp : '5'
}

// for (const key in myObject) {
//         console.log(key, " - ", myObject[key])
// }

// Iteration of the Arrays using for in gives the the keys(index) of the elements
// Maps are not iteratable by for in    


// higher order array loops - for each

// const arrForEach = ['HTML','CSS','JavaScript']
// arrForEach.forEach( (i, index, arrlist) => {
//     console.log(i, typeof(i), index, arrlist);
// })

// Iteration of the object list in array with for each
const objArrForEach = [{lang: 'html', ind: '0'},{lang:'js', ind:'1'},{lang:'React', ind:'2'}]
objArrForEach.forEach( (item) => {
    console.log(item," - ", typeof(item), " - ", item.lang, " - ", item.ind);
})