//Регистрация
const signin = document.querySelector("#signinbutton")

const regEmail = document.querySelector("#regEmail")
const regPassword = document.querySelector("#regPassword")
const regName = document.querySelector("#regName")
const regSurname = document.querySelector("#regSurname")
const regAge = document.querySelector("#regAge")
//Нужно добавить здесь еще пару ключей для цвет буков и цвет фона
class User{
    constructor(email,password,name,surname,age){
        this.email = email
        this.password = password
        this.name = name
        this.surname = surname
        this.age = age
        this.fontcolor = "black"
        this.backcolor = "white"
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
    if(checkData(newUser)){
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
}

function checkData(user) {
    if (!validateEmail(user.email)||!validateAge(user.age)||validatePassword(user.password)) {
        alert("Incorrect Data!")
        return false;
    } else if (user.name.length < 1 || user.surname.length < 1
    || user.password.length < 1 || user.age.length < 1) {
        alert('Complete all data!')
        return false;
    } else {
        return true;
    }   
}


//Валидация данных пароля почты и возраста
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )};

const validateAge = (age) => {
    return age.match(
            /^[1-9][0-9]$|^[1-9]$|^1[0-9][0-9]$/
        )};

const validatePassword = (password) => {
    if(password.length <= 8){
        return String(password)
        .match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*/$!]).{8,}$/
        )
    }else{
        return false
    }};