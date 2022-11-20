//создать таблицу, в которой будут данные первые 10 штук. потом снизу ссылка на следюущие данные
//И еще на каждой строке что была кнопка что создавала бы полную карточку с данными
//1. Создать функцию генерации таблицы +
//2. Создать функцию пагинация
//3. Создать функцию детального рассмотрения +
const state = {
    initalPage: 1,
    amount: JSON.parse(localStorage.getItem("Items")).length,
    maxItems: 10,
    currentPage: 1,
    totalPages(){
        let result = Math.ceil(state.amount/state.maxItems)
        return result
    }
}

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json => localStorage.setItem("Items", JSON.stringify(json)))
            .then(createTable(JSON.parse(localStorage.getItem("Items")).splice(0,state.maxItems)))

//Надо переделать функцию под то что бы она использовала данные стейта и резала данные
function createTable(info){
    const table = document.querySelector(".table");
    info.forEach((el) =>{
        table.innerHTML += `
        <tr id="${el.id}item">
            <td>${el.id}</td>
            <td>${el.title}</td>
            <td>${el.price} $</td>
            <td>${el.rating.rate}★</td>
            <td>
                <input type="button" value="more" onclick="showCard(${el.id})">
            </td>
        </tr>`
    })
}

function showCard(itemId){
    let card = document.querySelector(".itemCard")
    let items = JSON.parse(localStorage.getItem("Items"));
    card.innerHTML =`
    <p class="title">${items[itemId-1].title}</p>
    <p class="price">${items[itemId-1].price}$</p>
    <img width="100px" height="100px" src="${items[itemId-1].image}" alt="">
    <p class="desc">${items[itemId-1].description}</p>
    `
}

const left = document.querySelector(".left")
const rigth = document.querySelector(".right")

function displayButton(page){
    //Если только одна страница
    if(state.totalPages() === state.initalPage){
        left.classList.add("disable")
        rigth.classList.add("disable")
    }
    //если последняя
    if(page === state.totalPages() && page !== state.initalPage){
        left.classList.remove("disable")
        rigth.classList.add("disable")
    }
    //если первая
    if(page === state.totalPages() && state.totalPages() > state.initalPage){
        left.classList.add("disable")
        rigth.classList.remove("disable")
    }
    //если где то в середине
    if(page !== state.initalPage && page < state.totalPages()){
        left.classList.remove("disable")
        rigth.classList.remove("disable")
    }
}

displayButton(state.currentPage)