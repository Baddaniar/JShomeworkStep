//Шахматная доска
function chessboard(){
    for(let i = 0; i < 4 ; i++){
        console.log("|#  #  #  # |")
        console.log("| #  #  #  #|")
    }
}
//chessboard()

//FizzBuzz
function FizzBuzz(){
    for(let j = 1; j < 100; j++){
        if(j % 5 === 0 && j % 3 === 0){
            console.log('FizzBuzz')
        }else if(j % 5 === 0 && j % 3 !== 0){
            console.log("Buzz")
        }else if(j % 3 === 0){
            console.log('Fizz')
        }else{
            console.log(j)
        }
    }
}
//FizzBuzz()

//Палидрос
let test = 'asddsa'
function palidrome(string){
    return string.split('').reverse().join('') == string
}