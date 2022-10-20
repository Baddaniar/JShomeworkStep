

let color = document.querySelector("#Color")
let type = document.querySelector("#typeSelection")
let code = document.querySelector("#Code")

let save = document.querySelector("#saveButton")
let allcolors = document.querySelector(".allcolors")

let colorerror = document.querySelector("#colorError")
let codeerror = document.querySelector("#codeError")

save.addEventListener("click", function(){
    let mycolor = {
        color: color.value,
        type: type.value,
        code: code.value
    }
    let colors = []
    if(checkData(mycolor)){//Тутсделаем проверку на заполнение типа check data 
        if(localStorage.getItem("colors") === null){
            colors.push(mycolor);
            localStorage.setItem("colors", JSON.stringify(colors));
            createbox()
            colorerror.innerText = ""
            codeerror.innerText = ""
        }else{
            colors = JSON.parse(localStorage.getItem("colors"));
            colors.push(mycolor);
            localStorage.setItem("colors", JSON.stringify(colors));
            colorerror.innerText = ""
            codeerror.innerText = ""
            createbox()
        }
    }
})
if(localStorage.getItem("colors") !== null){
    createbox()
}


function createbox(){
    let collorsgrid = document.querySelector(`.allcolors`)
    collorsgrid.innerHTML = ""
    let allcolors = JSON.parse(localStorage.getItem("colors"));
    allcolors.forEach((el) => {
        let colorcode = ''
        if(el.type == "RGBA"){
            colorcode = "rgba"
        }else if(el.type == "RGB"){
            colorcode = "rgb"
        }else{
            colorcode = "hex"
        }
        collorsgrid.innerHTML += `
        <div class="colorBox" style="background-color: ${colorcode}(${el.code});">
        <div class="innerbox">
        <p>${el.color}</p>
        <p>${el.type}</p>
        <p>${el.code}</p>
        </div></div>`
    })
}


function checkData(mycolor) {
    if(!validatecolorname(mycolor.color)){
        colorerror.innerText = "color can contain only letters"
        return false
    }else if(!validatetype(mycolor.type,mycolor.code)){
        codeerror.innerText = "Wrong pattern"
        return false
    }else{
        return true
    }
}

const validatecolorname = (color) => {
    return String(color)
        .match(
            /[a-zA-Z]/
        )};
//
const validatetype = (type,code) =>{
    if(type = "RGB"){
        let reg = /^(\d{1,3}), (\d{1,3}), (\d{1,3})$/
            return reg.test(code)

        }else if(type = "RGBA"){
            let reg = /^(\d{1,3}), (\d{1,3}), (\d{1,3}), (\S{1,3})$/
            return reg.test(code)
    }else{ 
        let reg = /^#([0-9a-f]{3,6})$/
        return reg.test(code)
    }
}






