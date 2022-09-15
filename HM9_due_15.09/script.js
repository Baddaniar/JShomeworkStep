//1. Создать массив из 10 цифр. вывести наибольшее и наименьшее значение массива
let testarr = [1,2,3,4,5,6,7,8,9]
testarr.sort()
console.log(testarr[0])
console.log(testarr[testarr.length-1])
//2. Заполнить массив из 5 числе при помощи promt. вывести массив. сумму значений и среднее значений массива

// let testarr2 = []
// for(let i = 0; i < 5; i++){
//     testarr2.push(+prompt('Введите число'))
// }
// let testarr2sum = 0
// for(let i = 0; i < testarr2.length; i++){
//     testarr2sum += testarr2[i]
// }
// let testarr2avr = (testarr2sum / testarr2.length)
// console.log(testarr2)
// console.log(testarr2sum)
// console.log(testarr2avr)

//3. создать 2 массива из 7 числе. сравнить значения в массиве по очереди и выводить информацию в консль.
let array1 = [1,2,3,4,5,6,7]
let array2 = [1,3,3,5,7,6,8]
for(let i = 0; i < array1.length; i++){
    if(array1[i] === array2[i]){
        console.log(`${array1[i]} равен ${array2[i]}`)
    }else{
        console.log(`${array1[i]} Не равен ${array2[i]}`)
    }
}


//4.создать массив из 10 чисел. сохранить во второй массив только те значения первого массива которые являеются четными
let test = [1,2,3,4,5,6,7,8,9]
let test2 = []
for(let i = 0; i < test.length; i++){
    if(test[i] % 2 == 0){
        test2.push(test[i])
    }
}
console.log(test2)