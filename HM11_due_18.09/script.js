// //Шахматная доска
// function chessboard(){
//     for(let i = 0; i < 4 ; i++){
//         console.log("|#  #  #  # |")
//         console.log("| #  #  #  #|")
//     }
// }
// //chessboard()

// //FizzBuzz
// function FizzBuzz(){
//     for(let j = 1; j < 100; j++){
//         if(j % 5 === 0 && j % 3 === 0){
//             console.log('FizzBuzz')
//         }else if(j % 5 === 0 && j % 3 !== 0){
//             console.log("Buzz")
//         }else if(j % 3 === 0){
//             console.log('Fizz')
//         }else{
//             console.log(j)
//         }
//     }
// }
// //FizzBuzz()

// //Палидрос
// let test = 'asddsa'
// function palidrome(string){
//     return string.split('').reverse().join('') == string
// }

function timeConversion(s) {
    let time = s.substring(8)
    let hours = s.substring(0,2)
    let minutes = s.substring(3,5)
    let seconds = s.substring(6,8)
    
    if(time ==="AM" && hours ==="12"){
        hours = "00"
    }else if(time ==="PM" && hours==="12"){
        hours = "12"
    }else if(time === "PM"){
        hours = parseInt(hours) + 12
    }
    let result = `${hours} : ${minutes} : ${seconds}`
    return 

}