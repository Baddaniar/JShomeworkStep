//Главная страница
let logoutbutt = document.querySelector("#logoutbutton")
let deluser = document.querySelector("#delbutt")
let edituser = document.querySelector("#editbutt")
//Сделать корректировку польхзователя. наверное через модалку хз

logoutbutt.addEventListener("click", logout)

deluser.addEventListener("click", deletuser)

edituser.addEventListener("click", edituserdata)


//Добавить функцию удаления персонажа
function deletuser(){
    let users = JSON.parse(localStorage.getItem("User"))
    let currentUser
    if(localStorage.getItem("currentUser") !== null){
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }else{
        currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }
    console.log('asdasd')
    localStorage.setItem("User", JSON.stringify(
        users.filter(user => user.email != currentUser.email)
    ))

    if(localStorage.getItem("currentUser") !== null){
        localStorage.removeItem("currentUser")
    }else{
        sessionStorage.removeItem("currentUser")
    }
    logout()
}

//функция логаута из системы
function logout(){
    sessionStorage.removeItem("currentUser")
    window.location.href = "index.html"
}

let nameEl = document.querySelector("#userName")
nameEl.disabled = true
let surnameEl = document.querySelector("#userSurname")
surnameEl.disabled = true
let ageEl = document.querySelector("#userAge")
ageEl.disabled = true

//Функция отображения текущего юзера з
getCurrentUser()

function getCurrentUser() {
    if(localStorage.getItem("currentUser") !== null){
        let allusers = JSON.parse(localStorage.getItem("User"))
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let fulluser = allusers.filter(user => user.email === currentUser.email);

        nameEl.value = fulluser[0].name
        surnameEl.value = fulluser[0].surname
        ageEl.value = fulluser[0].age   
    }else{
        let allusers = JSON.parse(localStorage.getItem("User"))
        let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        let fulluser = allusers.filter(user => user.email === currentUser.email);

        nameEl.value = fulluser[0].name
        surnameEl.value = fulluser[0].surname
        ageEl.value = fulluser[0].age   
    }
}


//Таблица с пользователями
let table = document.querySelector("#userTable")
function getallusers(){
    let allusers = JSON.parse(localStorage.getItem("User"), function(key,value){
        if(key === "password") return undefined
        return value
    })
    let currentUser
    if(localStorage.getItem("currentUser") !== null){
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }else{
        currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }
    let otherUsers = allusers.filter(user => user.email !== currentUser.email);

    otherUsers.forEach((element, index) => {
        table.innerHTML +=`
        <tr id="${index}">
            <td>${index+1}</td>
            <td>${element.email}</td>
            <td>${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.age}</td>
        </tr>`
    });

}

getallusers();

//Поиск юзеров по таблице
const searchuser = document.querySelector("#searchUser")
searchuser.addEventListener("input", filteruser)

function filteruser(){
    let username = searchuser.value
    let regex = new RegExp(username, "i")
    if(searchuser.value === ''){
        table.innerHTML = ""
        getallusers()
    }else{
        table.innerHTML = ""
        let allusers = JSON.parse(localStorage.getItem("User"), function(key,value){
            if(key === "password") return undefined
            return value
        })
        let currentUser
        if(localStorage.getItem("currentUser") !== null){
            currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }else{
            currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        }
        let otherUsers = allusers.filter(user => user.email !== currentUser.email);
        let youruser = otherUsers.filter(user => regex.test(user.name) || regex.test(user.surname))
        youruser.forEach((element, index) => {
            table.innerHTML +=`
            <tr>
                <td>${index+1}</td>
                <td>${element.email}</td>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.age}</td>
            </tr>`
        });
    }
}


//Функция добавления нового значения
function edituserdata(){
    if(edituser.value == "Edit acc"){
        nameEl.disabled = false
        surnameEl.disabled = false
        ageEl.disabled = false
        edituser.value = "Save edit"
    }else if(edituser.value == "Save edit"){
        //Навернео можно было сократить
        let allusers = JSON.parse(localStorage.getItem("User"))
        let currentUser
        if(localStorage.getItem("currentUser") !== null){
            currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }else{
            currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        }
        let otherUsers = allusers.filter(user => user.email !== currentUser.email);
        let fulluser = allusers.filter(user => user.email === currentUser.email);
        
        fulluser[0].name = nameEl.value
        fulluser[0].surname = surnameEl.value
        fulluser[0].age = ageEl.value

        let tecuser = fulluser[0]
        otherUsers.push(tecuser)
        localStorage.setItem("User", JSON.stringify(otherUsers))

        edituser.value = "Edit acc"

        nameEl.disabled = true
        surnameEl.disabled = true
        ageEl.disabled = true
        console.log("asdasd")
        getCurrentUser()
    }

}

//Функция забора цветов из апи.
let colors = []
let fontcolors = document.querySelector("#fontcolor")
let backcolors = document.querySelector("#backcolor")
let changecolor = document.querySelector("#changecolors")
getColors()

function getColors(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            JSON.parse(xhr.response).data.forEach(element => {
                colors.push(element)
            });
        }
    };
    xhr.open("GET", "https://reqres.in/api/unknown", false);
    xhr.send();
    addSelectColors()
}

//Функция добавления значений в выбор цветов

function addSelectColors(){
    colors.forEach((el) => {
        fontcolors.innerHTML +=`
        <option value="${el.color}">${el.name}</option>
        `
        backcolors.innerHTML +=`
        <option value="${el.color}">${el.name}</option>
        `
    })
}

//Функция сохранения цвета у ползователя

changecolor.addEventListener("click", saveColor)

function saveColor(){
    let allusers = JSON.parse(localStorage.getItem("User"))
    let currentUser
    if(localStorage.getItem("currentUser") !== null){
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }else{
        currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }
    let otherUsers = allusers.filter(user => user.email !== currentUser.email);
    let fulluser = allusers.filter(user => user.email === currentUser.email);
    fulluser[0].fontcolor = fontcolors.value
    fulluser[0].backcolor = backcolors.value

    otherUsers.push(fulluser[0])
    localStorage.setItem("User", JSON.stringify(otherUsers))
    changeallcolors()
}

let inputs = document.querySelectorAll("input")
let plines = document.querySelectorAll("p")
let selects = document.querySelectorAll("select")
let body = document.querySelector("body")

//Функция покраски окна данными из локалстораджа

function changeallcolors(){
    let allusers = JSON.parse(localStorage.getItem("User"))
    let currentUser
    if(localStorage.getItem("currentUser") !== null){
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }else{
        currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }
    let fulluser = allusers.filter(user => user.email === currentUser.email);

    body.style.backgroundColor = fulluser[0].backcolor

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.color = fulluser[0].fontcolor;
    }
    for (let i = 0; i < plines.length; i++) {
        plines[i].style.color = fulluser[0].fontcolor;
    }
    for (let i = 0; i < selects.length; i++) {
        selects[i].style.color = fulluser[0].fontcolor;
    }
    fontcolors.value = fulluser[0].fontcolor
    backcolors.value = fulluser[0].backcolor
}

changeallcolors()