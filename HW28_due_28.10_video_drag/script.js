//1

let video = document.querySelector("video")

video.addEventListener("mouseover", () => {
    video.pause()
})
video.addEventListener("mouseout", () => {
    video.play()
})