//Главная страница
let logoutbutt = document.querySelector("#logoutbutton")
let deluser = document.querySelector("#delbutt")
let edituser = document.querySelector("#editbutt")
//Сделать корректировку польхзователя. наверное через модалку хз

logoutbutt.addEventListener("click", logout)

deluser.addEventListener("click", deletuser)


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
let surnameEl = document.querySelector("#userSurname")
let ageEl = document.querySelector("#userAge")

getCurrentUser()
function getCurrentUser() {
    if(localStorage.getItem("currentUser") !== null){
        let allusers = JSON.parse(localStorage.getItem("User"))
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let fulluser = allusers.filter(user => user.email === currentUser.email);

        nameEl.textContent = fulluser[0].name
        surnameEl.textContent = fulluser[0].surname
        ageEl.textContent = fulluser[0].age   
    }else{
        let allusers = JSON.parse(localStorage.getItem("User"))
        let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        let fulluser = allusers.filter(user => user.email === currentUser.email);

        nameEl.textContent = fulluser[0].name
        surnameEl.textContent = fulluser[0].surname
        ageEl.textContent = fulluser[0].age   
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

