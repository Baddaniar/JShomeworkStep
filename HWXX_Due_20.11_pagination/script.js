//создать таблицу, в которой будут данные первые 10 штук. потом снизу ссылка на следюущие данные
//И еще на каждой строке что была кнопка что создавала бы полную карточку с данными
//1. Создать функцию генерации таблицы +
//2. Создать функцию пагинация
//3. Создать функцию детального рассмотрения +
// Полностью переделать под циферки и все такое. берем за основу другой пример.yy

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => localStorage.setItem("Items", JSON.stringify(json)));

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = JSON.parse(localStorage.getItem("Items"));
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
let currentPage;
const paginationLimit = 5;
const elementContainer = document.querySelector(".table");

const pageCount = () => Math.ceil(listItems.length / paginationLimit);
pageCount();

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount(); i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  const jsonData = JSON.parse(localStorage.getItem("Items"));
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  handleActivePageNumber();
  handlePageButtonsStatus();
  elementContainer.innerHTML = "";
  jsonData.forEach((item, index) => {
    if (index >= prevRange && index < currRange) {
      elementContainer.innerHTML += `
                     <tr id="${item.id}item">
                         <td>${item.id}</td>
                         <td>${item.title}</td>
                         <td>${item.price} $</td>
                         <td>${item.rating.rate}★</td>
                         <td>
                         <input type="button" value="more" onclick="showCard(${item.id})">
                         </td>
                     </tr>`;
    }
  });
};

const showCard = (itemId) => {
  let card = document.querySelector(".itemCard");
  let items = JSON.parse(localStorage.getItem("Items"));
  card.innerHTML = `
    <p class="title">${items[itemId - 1].title}</p>
    <p class="price">${items[itemId - 1].price}$</p>
    <img width="100px" height="100px" src="${items[itemId - 1].image}" alt="">
    <p class="desc">${items[itemId - 1].description}</p>
    `;
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");

    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// function createTable(info){
//     const table = document.querySelector(".table");
//     info.forEach((el) =>{
//         table.innerHTML += `
//         <tr id="${el.id}item">
//             <td>${el.id}</td>
//             <td>${el.title}</td>
//             <td>${el.price} $</td>
//             <td>${el.rating.rate}★</td>
//             <td>
//                 <input type="button" value="more" onclick="showCard(${el.id})">
//             </td>
//         </tr>`
//     })
// }
