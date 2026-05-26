console.log("hello world")

const minNum = 1;
const maxNum = 100;
const answer = Math.floor( Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0;
let guess;
let running = true

while(running){

    guess = window.prompt(`Guess a number from ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){
        console.log("That is not a number")
    } 
    else if(guess < minNum || guess > maxNum){
        console.log(`Choose a number between ${minNum} - ${maxNum}`)
    }
    else{
        attempts++
        if(guess < answer){
            window.alert("That is too low")
        }
        else if(guess > answer){
            window.alert("That is too HIGH")
        }
        else{
            window.alert(`You won, the correct number is${answer} after ${attempts} attempts `)
            running = false
        }
    }

}
