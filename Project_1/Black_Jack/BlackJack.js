let cards=[]

let sum=0

let hasBJ=false
let isAlive=false
let msg=""
let p_name="Sonic"
let p_chips=199

let deal_msg=document.getElementById("msg")
let add=document.getElementById("sum")
let deal_cds=document.querySelector("#cds")
document.querySelector("#per_chips").textContent=p_name+" : $"+p_chips

function startGame(){
    let firstCard=randomCard()
    let lastCard=randomCard()
    cards=[firstCard,lastCard]

    isAlive=true
    sum=firstCard+lastCard
    
    play()
}

function play(){
    //deal_cds.textContent="Cards: "+cards[0]+" - "+cards[1]
    deal_cds.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        if(i===cards.length-1)
        deal_cds.textContent+=cards[i]
        else
        deal_cds.textContent+=cards[i]+' - '
    }
    add.textContent="Sum: "+sum
    if(sum<=20){
        msg="Do you want to draw a new card?"
    }
    
    else if (sum===21)
    {
        msg="Wahoo! you got blackjack"
        hasBJ=true
    }

    else{
        msg="You are out of the game"
        isAlive=false
    }
    deal_msg.textContent=msg
}

//logical condition for new card
function newCard(){
   if(isAlive && !hasBJ){
    let thirdcard=randomCard()
   sum+=thirdcard
   cards.push(thirdcard)

   play()
   }
}

function randomCard(){
    if( Math.floor((Math.random())*13)+1 === 1)
    return 11
    else if(Math.floor((Math.random())*13)+1 > 10)
    return 10
    else
    return (Math.floor((Math.random())*13)+1)
}