var btn = document.getElementById("btn")
var clickCounter = document.getElementById("cc")
var count = 0
var shm = document.getElementById("show_more")
var img = document.getElementById("sus_img")
var com = document.getElementById("clicker_comment")

btn.addEventListener("click", function() {
    count++
    clickCounter.textContent = "Sus Counter: " + count

    if (count == 20) {
        com.textContent = "Kinda Sus..."
    } else if (count == 50) {
        com.textContent = "Being sus is respectful, but not now."
    } else if (count == 80) {
        com.textContent = "You look like a Legue of Legends player..."
    } else if (count == 100) {
        com.textContent = "You look like a Genshin Impact enjoyer..."
    } else if (count == 130) {
        com.textContent = "Just stop clicking!"
    } else if (count == 180) {
        com.textContent = "Too sussy..."
    }
})

shm.addEventListener("click", function() {
    if (img.style.display === "block") {
        sus_img.style.display = "none"
        shm.textContent = "Show More..."
    } else {
        sus_img.style.display = "block"
        shm.textContent = "Close Up"
    }
})