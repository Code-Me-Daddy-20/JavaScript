// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise 1 is to be consumed")
//         resolve("data passed")
//         reject()
//     }, 200);
// })//.then(() => console.log('Promise 1 is resolved'))

// promise1.then( (s) => {
//     console.log(`Promise 1 is resolved : ${s}`)
// })

// promise1.catch( () => {
//     console.log("Promise 1 is rejected")
// })



// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        let error = false
//        if(!error){
//             resolve({name : "Pr4" , message : "Promise resolved"})
//        }
//        else{
//             reject("Error in resolving the promise4");
//        }
//     }, 200);
// }).then((user) => {
//     return "UserName : "+ user.name 
// }).then((un) => {
//     console.log(un)
// }).catch((e) => {
//     console.log("Catch Block Error : ", e)
// }).finally(() => console.log("Finally executed"))






const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
             resolve({name : "Pr5" , message : "Promise5 resolved"})
        }
        else{
             reject("Error in resolving the promise5");
        }
     }, 200)
})
async function consumePr3(){
    try{
        const returnPr3 = await promise3
        console.log(returnPr3)
    }
    catch(e){
        console.log(e)
    }
}
consumePr3()