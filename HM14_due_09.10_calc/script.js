//Делаем калькулятор
let firstnumber = ""
let secondnumber = ""
let operatorvalue = ""
const resultscreen = document.querySelector("#screen")

function addnumber (number){
    if(operatorvalue === ""){
        firstnumber += number
        resultscreen.value = firstnumber
    }else{
        secondnumber += number 
        resultscreen.value = secondnumber
    }
}

function oper(operator){
    switch(operator){
        case "+":
            operatorvalue = "+"
            console.log(operatorvalue)
        break
        case "-":
            operatorvalue = "-"
            console.log(operatorvalue)
        break
        case "*":
            operatorvalue = "*"
            console.log(operatorvalue)
        break
        case "/":
            operatorvalue = "/"
            console.log(operatorvalue)
        break
    }
}

function results(){
    switch(operatorvalue){
        case "+":
            resultscreen.value = +firstnumber + +secondnumber
            console.log(resultscreen.value)
        break
        case "-":
            resultscreen.value = +firstnumber - +secondnumber
            console.log(resultscreen.value)
        break
        case "*":
            resultscreen.value = +firstnumber * +secondnumber
            console.log(resultscreen.value)
        break
        case "/":
            resultscreen.value = +firstnumber / +secondnumber
            console.log(resultscreen.value)
        break
    }
}

function clearall(){
    firstnumber = ""
    secondnumber = ""
    operatorvalue = ""
    resultscreen.value = ""
    console.log(firstnumber)
}