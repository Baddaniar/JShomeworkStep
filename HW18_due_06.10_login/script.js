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


//функция регистрации юзера
function regUser(){
    let newUser = new User(regEmail.value,regPassword.value,regName.value,regSurname.value,regAge.value)
    let values = []
    let users = JSON.parse(localStorage.getItem("User"))
    if(localStorage.getItem("User") === null){
        values.push(newUser)
        localStorage.setItem("User", JSON.stringify(values))
        window.location.href = "index.html"
    }else{
        if(users.some(obj =>
            obj.email === newUser.email
        )){
            alert("Пользователь с таким логином уже есть")
        }else{
            values = JSON.parse(localStorage.getItem("User"))
            values.push(newUser)
            localStorage.setItem("User", JSON.stringify(values))
            window.location.href = "index.html"
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



//Функция проверки юзера при логине
function checkUser(){
    let currentUser = {email: "", password: 0}
    currentUser.email = logEmail.value
    currentUser.password = logPassword.value
    console.log(currentUser)
    let users = JSON.parse(localStorage.getItem("User"))
    if(loginremember.checked){
        if(users.some(obj => obj.email == currentUser.email
        )){
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
            window.location.href = "main.html"
        }else{
            alert("Вы ввели неправильный логин и пароль")
        }
    }else{
        localStorage.removeItem("currentUser")
        if(users.some(obj => 
            obj.email === currentUser.email
        )){
            sessionStorage.setItem("currentUser", JSON.stringify(currentUser))
            window.location.href = "main.html"
        }else{
            alert("Вы ввели неправильный логин и пароль")
        }
    }


}

//Проверка на автозаполнение
function isremembered(){
    if(localStorage.getItem("currentUser") !== null){
        logEmail.value = JSON.parse(localStorage.getItem("currentUser")).email
        logPassword.value = JSON.parse(localStorage.getItem("currentUser")).password
    }
}
if(logEmail){
    isremembered()
}



//Главная страница
let logoutbutt = document.querySelector("#logoutbutton")
let deluser = document.querySelector("#delbutt")

if(logoutbutt){
    logoutbutt.addEventListener("click", logout)
}

if(deluser){
    deluser.addEventListener("click", deleteuser)
}


//Добавить функцию удаления персонажа
function deletuser(){
    let users = JSON.parse(localStorage.getItem("User"))


}
//функция логаута из системы
function logout(){
    sessionStorage.removeItem("currentUser")
    window.location.href = "index.html"
}


