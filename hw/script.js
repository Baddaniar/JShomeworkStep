//Let
// let arr = [{},{},{}];
// for(let i = 0; i < arr.length; i++){
//     console.log(i)
//     arr[i].saySmth = function (){
//         console.log(i)
//     }
// }

// arr[2].saySmth(); // 2
//Var 
var arr = [{},{},{}];
for(var i = 0; i < arr.length; i++){
    console.log(i)
    arr[i].saySmth = function (){
        console.log(i)
    }
}
//console.log()
arr[2].saySmth();// 3