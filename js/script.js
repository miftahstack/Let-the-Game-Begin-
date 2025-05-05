// function math(x,y) {
//     let result= x+y
//     console.log(result);
// }
// math(6,39)
// math(45,9)
// math(6,9)

// 3 types of function=========================================

// General Function
function info () {    console.log("This is a function");

}

// Nameless Function
let x = function(){
    console.log("This is a nameless function");
    
}

// Arrow Function
let y =  () => {
console.log("This is a arrowe function");

}


let members= ["A","V","Y","T"]

members.map(info=>{
    console.log(info);
    
})