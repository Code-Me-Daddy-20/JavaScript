//passenger count function
let cnt=0
function inc(){
    document.getElementById("cnt").innerText=++cnt
}
function dec(){
    document.getElementById("cnt").innerText=--cnt
}
function save(){
    let saveStr =" "+cnt+" - " 
    document.getElementById("save").innerText+=saveStr
    console.log(cnt)
}

















