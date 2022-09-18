//1 Дана строка, если в строке больше трех различных символов. то удалить в строке три любых символа.
//Иначе. добавить в строку в провзвольных местах новые элементы так, 
//Что бы количество различных элементов было больше трех
let test1 = 'sfsf'
function deltriple(string){
    let arr = string.split('')
    console.log(arr)

    let counts = {};
    for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = 1 + (counts[arr[i]] || 0);
}
    let randomnum = (Math.floor(Math.random() * arr.length))
    let randomchar = ['d','q','r','t','u','o','z','v']
    
    if(Object.keys(counts).length > 3){
        arr.splice(randomnum,3)
    }else{
        for(let j = 0; j < 4; j++){
            arr.push(randomchar[(Math.floor(Math.random() * randomchar.length))])
            arr.unshift(randomchar[(Math.floor(Math.random() * randomchar.length))])
        }

    }
    result = arr.join('')
    return result
}


//2Строка состоит из слов, разделенных одним или несколькими пробелами. 
//поменятей местами наибольшее по длине слова и наименьшее
let test2 = 'asde gsdfgdf   asfsd  asdasd qweqwqweqw   asdd dgs'
function maxminsort(string){
    let arr = string.split(' ')
    let filtered = arr.filter(element => element !== "")
    let filteredSorted = filtered.sort(function (a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    })
    filteredSorted.reverse()
    //console.log(filteredSorted)
    let firstitem = filteredSorted.shift()
    //console.log(firstitem)
    let lastitem = filteredSorted.pop()
    //console.log(lastitem)
    filteredSorted.push(firstitem)
    filteredSorted.unshift(lastitem)
    return filteredSorted
}

//3 Строка состит из слов, разделенных одним или несколькими пробелами. 
//переставтье слова в Алфавитном порядке
let test3 = "asd   fgdg   sdfs wer   vxcv  sdf"
function alphabet(string) {
    let arr = string.split(' ')
    let filtered = arr.filter(element => element !== "")
    let filteredSorted = filtered.sort()
    let result = filteredSorted.join(' ')
    return result
}