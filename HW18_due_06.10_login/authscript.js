
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
            getCurrentUser()
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
            getCurrentUser()
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
