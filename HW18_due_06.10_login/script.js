//1 добавить значение цветов к пользователям как по умолчанию при создании (черный текст и белый фон)
//2 добавить окна выбора цвета из тех что пришли в апишке
//3 Добавить возможность изменять цвет окна и цвет текста
//4 Добавить возможность сохоанять цвет к пользователю и красить все под цвет входящего пользователя
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
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log('asdasd')
    localStorage.setItem("User", JSON.stringify(
        users.filter(user => user.email != currentUser.email)
    ))
    localStorage.removeItem("currentUser")
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

//Функция отображения текущего юзера заменить с строки на инпут
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
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let otherUsers = allusers.filter(user => user.email !== currentUser.email);
        let fulluser = allusers.filter(user => user.email === currentUser.email);
        
        fulluser[0].name = nameEl.value
        fulluser[0].surname = surnameEl.value
        fulluser[0].age = ageEl.value

        let tecuser = fulluser[0]
        console.log(tecuser)
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
}
