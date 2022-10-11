

let color = document.querySelector("#Color")
let type = document.querySelector("#typeSelection")
let code = document.querySelector("#Code")

let save = document.querySelector("#saveButton")
let allcolors = document.querySelector(".allcolors")
let colornumber = 1
save.addEventListener("click", function(){

    let mycolor = {
        color: color.value,
        type: type.value,
        code: code.value
    }
    //console.log(mycolor)
    localStorage.setItem(colornumber, JSON.stringify(mycolor))

    //console.log(colornumber)
    let box = document.createElement(`div`)
    box.className = "colorBox"
    box.innerHTML = `
    <p>${JSON.parse(localStorage.getItem(colornumber)).color}</p>
    <p>${JSON.parse(localStorage.getItem(colornumber)).type}</p>
    <p>${JSON.parse(localStorage.getItem(colornumber)).code}</p>`
    allcolors.append(box)
    colornumber++
})