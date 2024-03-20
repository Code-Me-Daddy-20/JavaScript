// Exercise 1- Guess a number between 1 - 100, that computer randomly generates

// let num=Math.floor(Math.random()*100) + 1
// let cnt=0
// do{
//     u=prompt("Enter a number between 1 - 100") // prompt doent work on vs code 
//     if(u===num){
//         alert('Congratulations! You guessed the right number')
//         break
//     }

//     else if(u>num){
//         alert('Number too high')
//     }

//     else if(u<num){
//         alert('number too low')
//     }

//     else{
//         alert('Please enter a valid input')
//     }
//     cnt++
// }while(u!=num)
// console.log(`Number is ${num} and you guessed in ${cnt} guesses`)   //code works alright







// Practice set-6

// let age=prompt("Enter your age:")
// age= Number.parseInt(age)
// let c= confirm("Are you sure you want to see the result?")
// if(c){
// if(age>=18)
// alert("you are able to drive")
// else if(age>0 && age<18)
// alert("sorry you are not able to drive yet");
// else
// console.error("Please enter valid age")
// }
// else
// alert("ok bye!")


// let num= prompt("Enter a number:")
// num = Number.parseInt(num);
// if(num>4)
// location.href= "http://google.com"


// let color= prompt("Enter you fav color:")
// let c= confirm("Are you sure you want to change the background color?")
// if(c)
// document.body.style.backgroundColor= color







// Exercise 2- Snake, Water, Gun

// let cpui=Math.floor(Math.random()*3)
// let cpu=["S","W","G"][cpui]
// let user= prompt("Snake(S), Water(W), Gun(G)")

// if(user===cpu)
// alert("Its a draw")

// else if(user==="S"){

//     if(cpu==="W")
//     document.write(`User:${user} CPU:${cpu} <br> User Wins`)
//     else if(cpu==="G")
//     document.write(`User:${user} CPU:${cpu} <br> CPU Wins`)
// }

// else if(user==="G"){
//     if(cpu==="S")
//     document.write(`User:${user} CPU:${cpu} <br> User Wins`)
//     else if(cpu==="G")
//     document.write(`User:${user} CPU:${cpu} <br> CPU Wins`)
// }

// else if(user==="W"){
//     if(cpu==="G")
//     document.write(`User:${user} CPU:${cpu} <br> User Wins`)
//     else if(cpu==="S")
//     document.write(`User:${user} CPU:${cpu} <br> CPU Wins`)
// }

// else
// document.write("Enter valid input")







// Practice Set-7

// document.getElementById("navbar").firstElementChild.lastElementChild.previousElementSibling.style.background="red"

// Array.from(document.getElementsByTagName("li")).forEach(element => {
//     element.style.background="green"  
// });







// Exercise Set-3 To give the user random joke when refreshed

// let jokes=["Which is faster, hot or cold? Hot, because you can catch cold.",
// "What did one plate say to the other plate? Dinner's on me.",
// "Why do oranges wear sunscreen? So they don't peel.",
// "My wife told me to stop acting like a flamingo, so I had to put my foot down.",
// "What do you call a pig that does karate? A pork chop.",
// "Where does Batman go to the bathroom? The batroom.",
// "What do you call a pony with a sore throat? A little horse.",
// "What did the left eye say to the right eye? Between you and me, something smells.",
// "What did the mama tomato say to the baby tomato? Catch up!",
// "Why didn't the melons get married? Because they cantaloupe.",
// "What do you call a fake noodle? An impasta.",
// "How did the pig get to the hogspital? In a hambulance.",
// "I'm so good at sleeping I can do it with my eyes closed!",
// "Why does Humpty Dumpty love autumn? Because he had a great fall.",
// "What happens when a strawberry gets run over crossing the street? Traffic jam.",
// "Why did the cow jump over the moon? The farmer had cold hands.",
// "A termite walks into a bar and says, So, is the bar tender here?",
// "How does an octopus go into battle? Well-armed.",
// "What do you call a pudgy psychic? A four-chin teller.",
// "Why do bees have sticky hair? Because they use a honeycomb.",
// "How did the student feel when he learned about electricity? Totally shocked.",
// "What do you call a bee that can't make up its mind? A Maybe.",
// "Why was six afraid of seven? Because 7-8-9.",
// "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
// "I tried to catch fog yesterday. Mist.",
// "What do you call a hippie's wife? Mississippi.",
// "Two peanuts were walking down the street. One was a-salted.",
// "How can you tell it’s a dogwood tree? By the bark.",
// "What did the buffalo say when his kid went to college? Bison.",
// "What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.",
// "What's the stinkiest planet? Poopiter.",
// "What did one wall say to the other? I'll meet you at the corner.",
// "Why don't sharks eat clowns? Because they taste funny.",
// "A horse walks into a bar. The bartender says, Why the long face?",
// "What did the pirate say when he turned 80? Aye matey.",
// "What's black and white and goes round and round? A penguin in the washing machine.",
// "How do you organize a space party? You planet.",
// "Why couldn't the bicycle stand up by itself? It was two tired.",
// "Did you hear the rumor about butter? Well, I'm not going to spread it.",
// "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
// "What did one hat say to the other? You wait here, I'll go on ahead.",
// "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks.",
// "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
// "What do you call a boomerang that won’t come back? A stick.",
// "What did the full glass say to the empty glass? You look drunk.",
// "How do you stop a bull from charging? Cancel its credit card.",
// "Why don’t we see elephants hiding in trees? Because they’re really good at it.",
// "What’s the difference between a hippo and a zippo? One’s pretty heavy and the other’s a little lighter.",
// "Did you hear the one about the roof? Never mind, it's over your head.",
// "I used to hate facial hair...but then it grew on me."]

// let rd= Math.floor(Math.random()*51)
// document.getElementById("lame").innerHTML="Random Joke : "+ jokes[rd]







// Practice Set-8

// setInterval(function(){
//     document.querySelector("#bulb").classList.toggle("bulb")
// },100)  
// document.querySelector("#bulb")- selects the element by id
// .classList- gets all the class names of the elements
// .toggle("bulb")- toggles the properties of the bulb





// Exercise Set-4       Clock

// function showTime(){
// var date = new Date();
// var h = date.getHours();// 0 - 23
// var m = date.getMinutes(); // 0 - 59
// var s = date.getSeconds(); // 0 - 59
//     var session = "AM";

//     if(h == 0){
//         h = 12;
//     }

//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("time").textContent = time;

//     // setTimeout(showTime, 1000);

//     }

//     // showTime();
//     setInterval(showTime,1000)

// or

// setInterval(() => {                  
//     var date = new Date();
//     document.getElementById("hrs").innerHTML = date.getHours();
//     document.getElementById("min").innerHTML = date.getMinutes();
//     document.getElementById("sec").innerHTML = date.getSeconds();
// }, 1000);


// Practice set-9

let loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(src)
        }
        document.body.appendChild(script)
    })
}

// 1. console the src using then()
// let a = loadScript("https://code.jquery.com/jquery-3.5.1.js")
// a.then((value)=>{
//     console.log(value+ " loaded")
// })


// 2. console the src using async/await
// const as = async ()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://code.jquery.com/jquery-3.5.1.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }

// as()

// 3. 
// let p = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject(new Error("Error rising"))
//         }, 3000)
//     })
// }

// let as = async () => {
//     try{
//         let c = await p()
//         console.log(c)
//     }
//     catch(error){
//         console.log(`caught ${error}`)
//     }
// }

// as()

// 4. use promise.all()
// let p1 = async () => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(10)
//             },1000)
//         })
//     }
// let p2 = async () => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(20)
//             },2000)
//         })
//     }
// let p3 = async () => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(30)
//             },3000)
//         })
//     }

// const run = async ()=>{
//     console.time('run')
//     let a1 = await p1()
//     console.log(a1)
//     let a2 = await p2()
//     console.log(a2)
//     let a3 = await p3()
//     console.log(a3)
//     console.timeEnd('run')

//     console.time('run')
//     let a_all= await Promise.all([a1,a2,a3])
//     console.log(a_all)
//     console.timeEnd('run')
// }

// run()