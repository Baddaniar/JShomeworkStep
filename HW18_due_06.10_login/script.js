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


function regUser(){
    let newUser = new User(regEmail.value,regPassword.value,regName.value,regSurname.value,regAge.value)
    let values = []
    if(localStorage.getItem("User") === null){
        values.push(newUser)
        localStorage.setItem("User", JSON.stringify(values))
        window.location.href = "index.html"
    }else{//Добавить тут проверку на наличие юзера уже
        values = JSON.parse(localStorage.getItem("User"))
        values.push(newUser)
        localStorage.setItem("User", JSON.stringify(values))
        window.location.href = "index.html"
    }
    
}
//Логин
const logEmail = document.querySelector("#loginEmail")
const logPassword = document.querySelector("#loginPassword")

const login = document.querySelector("#loginButton")

login.addEventListener("click", checkUser)

function checkUser(){
    if(JSON.parse(localStorage.getItem("User")).includes(logEmail.value) &&
    JSON.parse(localStorage.getItem("User")).includes(logPassword.value)){
        alert('все верно')
        window.location.href = "main.html"
    }else{
        alert('Ошибка')
    }

}
