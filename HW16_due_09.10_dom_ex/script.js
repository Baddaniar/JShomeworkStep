//1 ex
const nameInput = document.querySelector("#nameInput")

nameInput.addEventListener("input",checkEmail)
function checkEmail(){
    if(nameInput.value.match(/\d/g)){
        alert("don't use digits")
        nameInput.value = nameInput.value.substring(0, nameInput.value.length - 1)
    }
}

//2 ex
const modal = document.querySelector(".modal")
const closemodal =document.querySelector("#modalclose")
const openmodal = document.querySelector("#modalopen")

openmodal.onclick = function (){
    modal.style.display = "block"
}
closemodal.onclick = function (){
    modal.style.display = "none"
}


//3 ex
let field = document.querySelector("#field")
let ball = document.querySelector("#ball")


// 4 ex
const colorchbutt = document.querySelector("#colorch")
const greenlight = document.querySelector("#green")
const yellowlight = document.querySelector("#yellow")
const redlight = document.querySelector("#red")

colorchbutt.addEventListener("click", changecolor)
let turn = 1
function changecolor(){
    if(turn === 1){
        greenlight.style.backgroundColor = "green";
        redlight.style.backgroundColor = "grey";
        turn = 2
    }else if(turn === 2){
        yellowlight.style.backgroundColor = "yellow";
        greenlight.style.backgroundColor = "grey";
        turn = 3
        console.log(turn)
    }else{
        redlight.style.backgroundColor = "red";
        yellowlight.style.backgroundColor = "grey";
        turn = 1
        console.log(turn)  
    }

}
//5 ex
ol.onclick = function(event) {
    if (event.target.tagName != "LI") return;
    Select(event.target)
  }

  ol.onmousedown = function() {
    return false;
  };


  function Select(li) {
    let selected = ol.querySelectorAll('.chosen');
    for(let elem of selected) {
      elem.classList.remove('chosen');
    }
    li.classList.add('chosen');
  }

//6 ex
let tooltip;

    document.onmouseover = function(event) {
      let target = event.target;
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerHTML = tooltipHtml;
      document.body.append(tooltip);

      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
      if (left < 0) left = 0; 

      let top = coords.top - tooltip.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }

    };