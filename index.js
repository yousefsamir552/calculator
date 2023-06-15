const button1 = document.querySelector(".one")
const button2 = document.querySelector(".two")
const button3 = document.querySelector(".three")
const button4 = document.querySelector(".four")
const button5 = document.querySelector(".five")
const button6 = document.querySelector(".six")
const button7 = document.querySelector(".seven")
const button8 = document.querySelector(".eight")
const button9 = document.querySelector(".nine")
const button0 = document.querySelector(".zero")
const buttonDot = document.querySelector(".dot")
const buttonDel = document.querySelector(".del")
const buttonAc = document.querySelector(".ac")
const buttonDivide = document.querySelector(".divide")
const buttonMultiply = document.querySelector(".multiply")
const buttonMinus = document.querySelector(".minus")
const buttonPlus = document.querySelector(".plus")
const buttonEqual = document.querySelector(".equal")
const screen1 = document.querySelector(".report")
const screen2 = document.querySelector(".focasenom")

let currentNumber = ""
let storageNumber = ""
let opparation = ""
let answer = ""
let screen1meamory = ""

function solve () {

    if (answer !== ""){
        storageNumber = answer
    }

    currentNumber = Number(currentNumber)
    storageNumber = Number(storageNumber)
    
    if (opparation === 1){
        answer = storageNumber / currentNumber
    }
    
    else if(opparation === 2){
        answer = storageNumber * currentNumber
    }
    
    else if(opparation === 3){
        answer = storageNumber - currentNumber
    }
    
    else if (opparation === 4){
        answer = storageNumber + currentNumber
    }

    screen1meamory = currentNumber
    currentNumber = ""
    console.log(answer)
    console.log("opparation" + opparation)
    rinderscreen1 ()
    rinderscreen2 ()

}

buttonEqual.addEventListener ("click", solve)

buttonDivide.addEventListener ("click", function () {
    
    if (storageNumber !== ""){
        solve ()
        opparation = 1
    }
    
    else if (currentNumber !== ""){
        storageNumber = currentNumber
        currentNumber = ""
        opparation = 1
        rinderscreen1 ()
    }
    
    else {
        storageNumber = answer
        opparation = 1
        rinderscreen1 ()
    }
    


})

buttonMultiply.addEventListener ("click", function () {
    
    if (storageNumber !== ""){
        solve ()
        opparation = 2
    }
    
    else if (currentNumber !== ""){
        storageNumber = currentNumber
        currentNumber = ""
        opparation = 2
        rinderscreen1 ()
    }
    
    else {
        storageNumber = answer
        opparation = 2
        rinderscreen1 ()
    }
    
})

buttonMinus.addEventListener ("click", function () {
    
    if (storageNumber !== ""){
        solve ()
        opparation = 3
    }
    
    else if (currentNumber !== ""){
        storageNumber = currentNumber
        currentNumber = ""
       opparation = 3
        rinderscreen1 ()
    }
    
    else {
        storageNumber = answer
        opparation = 3
        rinderscreen1 ()
    }

})

buttonPlus.addEventListener ("click", function () {
    
    if (storageNumber !== ""){
        solve ()
        opparation = 4
    }
    
    else if (currentNumber !== ""){
        storageNumber = currentNumber
        currentNumber = ""
        opparation = 4
        rinderscreen1 ()
    }
    
    else {
        storageNumber = answer
        opparation = 4
        rinderscreen1 ()
    }
    
})

buttonDel.addEventListener ("click", function () {
    currentNumber = currentNumber.slice(0, -1)
    rinderscreen2 ()
})

buttonAc.addEventListener ("click", function () {
    currentNumber = ""
    storageNumber = ""
    answer = ""
    opparation = ""
    rinderscreen2 ()
    rinderscreen1 ()
})

button1.addEventListener ("click", function () {
    currentNumber += "1"
    rinderscreen2 ()
})

button2.addEventListener ("click", function () {
    currentNumber += "2"
    rinderscreen2 ()
})

button3.addEventListener ("click", function () {
    currentNumber += "3"
    rinderscreen2 ()
})

button4.addEventListener ("click", function () {
    currentNumber += "4"
    rinderscreen2 ()
})

button5.addEventListener ("click", function () {
    currentNumber += "5"
    rinderscreen2 ()
})

button6.addEventListener ("click", function () {
    currentNumber += "6"
    rinderscreen2 ()
})

button7.addEventListener ("click", function () {
    currentNumber += "7"
    rinderscreen2 ()
})

button8.addEventListener ("click", function () {
    currentNumber += "8"
    rinderscreen2 ()
})

button9.addEventListener ("click", function () {
    currentNumber += "9"
    rinderscreen2 ()
})

button0.addEventListener ("click", function () {  
    currentNumber += "0"
    rinderscreen2 ()
})

buttonDot.addEventListener ("click", function () {  
    currentNumber += "."
    rinderscreen2 ()
})


function rinderscreen2 () {
    if(currentNumber !== ""){
        screen2.innerHTML = currentNumber
    }else{
        screen2.innerHTML = answer
    }   
    
}

function rinderscreen1 () {
    screen2.innerHTML = ""


    if (opparation === 1){
        screen1.innerHTML = storageNumber + " / " + screen1meamory
    }
    
    else if(opparation === 2){
        screen1.innerHTML = storageNumber + " * " + screen1meamory
    }
    
    else if(opparation === 3){
        screen1.innerHTML = storageNumber + " - " + screen1meamory
    }
    
    else if (opparation === 4){
        screen1.innerHTML = storageNumber + " + " + screen1meamory
    }
    
    else{
        screen1.innerHTML = ""
    }

    screen1meamory = ""

}