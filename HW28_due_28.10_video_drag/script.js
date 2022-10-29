//1
let video = document.querySelector("video")

video.addEventListener("mouseover", () => {
    video.pause()
})
video.addEventListener("mouseout", () => {
    video.play()
})

//2
function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.append(document.getElementById(data));
  }