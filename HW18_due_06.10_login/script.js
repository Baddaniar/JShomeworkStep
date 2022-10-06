//Регистрация
const signin = document.querySelector("#signinbutton")

const regEmail = document.querySelector("#regEmail")
const regPassword = document.querySelector("#regPassword")
const regName = document.querySelector("#regName")
const regSurname = document.querySelector("#regSurname")
const regAge = document.querySelector("#regAge")

class User{
    constructor(email,password,name,surname,age){
        this.email = email
        this.password = password
        this.name = name
        this.surname = surname
        this.age = age
    }
}

if(signin){
    signin.addEventListener("click", regUser)
}

//Надо решить вопрос с проверкой через array.some введеных значений и значений в localStorage
function regUser(){
    let newUser = new User(regEmail.value,regPassword.value,regName.value,regSurname.value,regAge.value)
    let values = []
    let users = JSON.parse(localStorage.getItem("User"))
    if(localStorage.getItem("User") === null){
        values.push(newUser)
        localStorage.setItem("User", JSON.stringify(values))
        window.location.href = "index.html"
    }else{
        if(users.some(function (obj){
            if(obj.email == newUser.email){
                return true
            }else{
                return false
            }
        })){
            values = JSON.parse(localStorage.getItem("User"))
            values.push(newUser)
            localStorage.setItem("User", JSON.stringify(values))
            window.location.href = "index.html"
        }else{
            alert("Пользователь с таким логином уже есть")
        }

    }
    
}
//Логин
const logEmail = document.querySelector("#loginEmail")
const logPassword = document.querySelector("#loginPassword")
const loginremember = document.querySelector("#checkremember")

const login = document.querySelector("#loginButton")

if(login){
    login.addEventListener("click", checkUser)
}




function checkUser(){
    let currentUser = {email: "", password: 0}
    currentUser.email = logEmail.value
    currentUser.password = logPassword.value
    console.log(currentUser)
    let users = JSON.parse(localStorage.getItem("User"))
    if(users.some((obj) => {
        obj.email === currentUser.email})){
            alert("Все верно")
        }else{
            alert("Что то не так")
        }
    // if(loginremember.checked){
    //     localStorage.setItem("currentUser", JSON.stringify(currentUser))
    //     if(JSON.parse(localStorage.getItem("User")).some((obj) => {
    //         obj.email == JSON.parse(localStorage.getItem("currentUser")).email
    //     })){
    //         window.location.href = "main.html"
    //     }else{
    //         alert("Вы ввели неправильный логин и пароль")
    //         //localStorage.clear("currentUser")
    //     }
    // }else{
    //     localStorage.clear("currentUser")
    //     sessionStorage.setItem("currentUser", JSON.stringify(currentUser))
    //     if(JSON.parse(localStorage.getItem("User")).some((obj) => {
    //         obj.email === JSON.parse(sessionStorage.getItem("currentUser")).email
    //     })){
    //         window.location.href = "main.html"
    //     }else{
    //         alert("Вы ввели неправильный логин и пароль")
    //         sessionStorage.clear("currentUser")
    //     }
    // }


}
//Проверка на автозаполнение после remember
if(localStorage.getItem("currentUser") !== null){
    logEmail.value = JSON.parse(localStorage.getItem("currentUser")).email
    logPassword.value = JSON.parse(localStorage.getItem("currentUser")).password
}

//Таблица вроде норм но нужно добавить стили и убрать колонкку пароль

