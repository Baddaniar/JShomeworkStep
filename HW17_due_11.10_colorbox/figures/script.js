//figures
const box = document.querySelector("#boxChoise")
const circle = document.querySelector("#circleChoise")
const romb = document.querySelector("#romchoise")
const triangle = document.querySelector("#triangle")
//colors
const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")
const color3 = document.querySelector("#color3")
const color4 = document.querySelector("#color4")
const color5 = document.querySelector("#color5")
const color6 = document.querySelector("#color6")
const color7 = document.querySelector("#color7")
const color8 = document.querySelector("#color8")
const color9 = document.querySelector("#color9")
const color10 = document.querySelector("#color10")

let chosencolor,figure;

function chosefigure(){
    if(box.checked){
        figure = "box"
    }else if(circle.checked){
        figure = "circle"
    }else if(romb.checked){
        figure = "romb"
    }else if(triangle.checked){
        figure = "triangle"
    }
}



color1.addEventListener("click", (el) =>{
    el.style.backgroundColor = "red"
    console.log(chosencolor)
})