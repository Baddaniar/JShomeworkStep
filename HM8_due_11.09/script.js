//1 Написать функцию которая принимает объект и выводит все данные через запятую
let testobj = {
    name: "Aaa",
    age: 34,
    date: "23.09.2021"
}

function logobj(obj){
    let arr = Object.entries(obj);
    console.log(arr.join(','))
}
//2Написать функцию который получает массив объектов где есть значение 'age', и надо их отсортировать
let testobj2 = [
    {name: "aaa",
    age: 23},
    {name: "bbb",
    age: 24},
    {name: "ccc",
    age: 54},
    {name: "ddd",
    age: 12},
]

function objsort(obj){
    let sortedobj = obj.sort(function (a, b){
        return a.age - b.age
    })
    return sortedobj
}

