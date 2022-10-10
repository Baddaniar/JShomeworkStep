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
    deluser.addEventListener("click", deletuser)
}


//Добавить функцию удаления персонажа
function deletuser(){
    let users = JSON.parse(localStorage.getItem("User"))
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log('asdasd')
    localStorage.setItem("User", JSON.stringify(
        users.filter(user => user.email != currentUser.email)
    ))
    logout()
}

//функция логаута из системы
function logout(){
    sessionStorage.removeItem("currentUser")
    window.location.href = "index.html"
}

// getCurrentUser()
// function getCurrentUser() {
//     let currentUser = JSON.parse(localStorage.getItem("currentUser")) 
//     let nameEl = document.querySelector("#userName")
//     nameEl.textContent = currentUser.name
//     let surnameEl = document.querySelector("#userSurname")
//     surnameEl.textContent = currentUser.surname
//     let ageEl = document.querySelector("#userAge")
//     ageEl.textContent = currentUser.age      
// }


//Таблица с пользователями
function getallusers(){
    let allusers = JSON.parse(localStorage.getItem("User"), function(key,value){
        if(key === "password") return undefined
        return value
    })
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let otherUsers = allusers.filter(user => user.email !== currentUser.email);
    let table = document.querySelector("#userTable")
    otherUsers.forEach((element, index) => {
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
getallusers();


const searchuser = document.querySelector("#searchUser")
searchuser.addEventListener("input", filteruser)

function filteruser(){
    let username = searchuser.value
    if(searchuser.value === ''){
        getallusers()
    }else{
        let searched
    }
}