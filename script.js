// all functions of the game:-
function getValue(id){
    let e = document.getElementById(id).value 
    return e 
}

function reset(){
    name1Health = 100
    name2Health = 100 
    getElement('sch1').innerText = 100
    getElement('sch2').innerText = 100
    getElement('status').innerText = "No one won."
    getElement("status2").innerText = "No one won."
}

function showValue(id, value){
    let ids = document.getElementById(id)
    ids.innerText = value 
}

function getElement(id){
    return document.getElementById(id)
}

function checkwin(){
    if (name1Health > 0 && name2Health <= 0){
            getElement('status').innerText = 'You win!'
            getElement('status2').innerText='You lose!'
            punch1.disabled = true 
            punch2.disabled = true 
            play.disabled = false
        }
        if (name2Health > 0 && name1Health <= 0){
            getElement('status2').innerText = 'You win!'
            getElement('status').innerText='You lose!'
            punch1.disabled = true 
            punch2.disabled = true 
            play.disabled = false 
        }
}

// all variables of the game:-
let random = Math.random() 
let turning = [true, false]
let num = Math.floor(random * turning.length)
let turns = turning[num]
const button = document.getElementById("start")
let name1Health = 100
let name2Health = 100 
const play = getElement('play')
const punch1 = document.getElementById('punch1')
const punch2 = document.getElementById('punch2')
console.log(turning.length)

// all the event listeners of the game:-
button.addEventListener('click',async ()=>{
    showValue('sname1', getValue('name1'))
    showValue('sname2', getValue('name2'))
    play.disabled = true 
    reset()
    document.getElementById('name1').value = ''
    document.getElementById('name2').value = ''
    if (turns === true){
        punch1.disabled = false 
    }
    if (turns === false){
        punch2.disabled = false 
    }
})

punch1.addEventListener('click', ()=>{
    if (turns === true){
        let random = Math.random() 
        let dropHealth = Math.floor(random * 30) + 1
        name2Health -= dropHealth
        getElement('sch2').innerText = name2Health
        turns = false 
        punch1.disabled = true 
        punch2.disabled = false 
        checkwin()
    }
})

punch2.addEventListener('click', ()=>{
    if (turns === false){
        let random = Math.random() 
        let dropHealth = Math.floor(random * 30) + 1
        name1Health -= dropHealth
        getElement('sch1').innerText = name1Health
        turns = true 
        punch1.disabled = false
        punch2.disabled = true 
        checkwin()
    }
})

play.addEventListener("click", ()=>{    
    if (turns === true){
        punch1.disabled = false 
    }
    if (turns === false){
        punch2.disabled = false 
    } 
    reset()
    play.disabled = true 
}) 
