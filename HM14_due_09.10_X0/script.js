let turn = 0;
let whose = document.querySelector("#whoseTurn")

function startGame(){
    turn = 1
    console.log(turn)
    whose.textContent = "Ход первого игрока"
}

function resetGame(){
    turn = 0
    console.log(turn)
    whose.textContent = "Press Start game"
}

//Используй делегирование событий! должно помочь и быстрее будет и короче
//https://habr.com/ru/post/512782/


function placeturn(text){
    if(turn === 1){
        text = "X"
        turn++
        console.log(turn)
    }else{
        text = "0"
        turn++
        console.log(turn)
    }

}