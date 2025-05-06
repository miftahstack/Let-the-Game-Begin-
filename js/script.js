// // function math(x,y) {
// //     let result= x+y
// //     console.log(result);
// // }
// // math(6,39)
// // math(45,9)
// // math(6,9)

// // 3 types of function=========================================

// // General Function
// function info () {    console.log("This is a function");

// }

// // Nameless Function
// let x = function(){
//     console.log("This is a nameless function");

// }

// // Arrow Function
// let y =  () => {
// console.log("This is a arrowe function");

// }


// let members= ["A","V","Y","T"]

// members.map(info=>{
//     console.log(info);

// })


// _____________________________________________________

// Number Guessing Game+++++++

// ScreenOne Start_______
let screenOne = document.querySelector(".screenOne")
let title = document.querySelector("title")
let nameInput = document.querySelector(".nameInput")
let startGame = document.querySelector(".startGame")
let screenOneError = document.querySelector(".screenOneError")
// ScreenOne End_______


// ScreenTwo Start_______
let screenTwo = document.querySelector(".screenTwo")
let titleTwo = document.querySelector(".titleTwo")
let nameInputTwo = document.querySelector(".nameInputTwo")
let startGameTwo = document.querySelector(".startGameTwo")
let screenTwoError = document.querySelector(".screenTwoError")

// ScreenTwo End_______


startGame.addEventListener("click", function () {
    if (nameInput.value == "") {
        screenOneError.style.display = "block"
        
    }
    else {

        screenOne.style.display="none"
        screenTwo.style.display="block"
    }
});

startGameTwo.addEventListener("click", function () {
    if (nameInputTwo.value == "") {
        screenTwoError.style.display = "block"
        
    }

    else{
        screenTwo.style.display="none"
    }
});




