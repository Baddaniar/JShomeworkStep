//1
let now = new Date;
function showtime(){
    console.log(now)
}

function secondSet(seconds){
    now.setSeconds(seconds)
}

function minuteSet(minute){
    now.setMinutes(minute)
}

function hourSet(hour){
    now.setHours(hour)
}
//2
function numbGame(number){
    let result = +prompt("Введите число от 0 до 100")
    while(result !== number){
        if(result > number){
            console.log(` число ${result} больше загаданного`)
            result = +prompt("Введите число от 0 до 100")
        }else if(result < number){
            console.log(` число ${result} меньше загаданного`)
            result = +prompt("Введите число от 0 до 100")
        }
    }
    console.log(`${result} верное число`)
}