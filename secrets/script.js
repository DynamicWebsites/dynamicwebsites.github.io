var carpet_corner = document.getElementById("carpet_corner")
var carpet = document.getElementById("carpet")
var room = document.getElementById("room")
var room_open = document.getElementById("room_open")
var outside = document.getElementById("outside")
var carpet_event = 0

var answ_a = document.getElementById("answ_a")
var answ_b = document.getElementById("answ_b")
var answ_c = document.getElementById("answ_c")


var exit_room = document.getElementById("exit_room")

var doorknob = document.getElementsByClassName("doorknob")

answ_a.addEventListener("click", function() {
    var sp1 = document.getElementById("sp1")
    var sp2 = document.getElementById("sp2")
    var sp3 = document.getElementById("sp3")
    sp1.textContent = "   It feels so awkward,   "
    sp2.textContent = "talking to the kid for the"
    sp3.textContent = "      first time...       "

    sp1.title = "Так ніяково, перший раз розмовляю з дитиною..."
    sp2.title = "Так ніяково, перший раз розмовляю з дитиною..."
    sp3.title = "Так ніяково, перший раз розмовляю з дитиною..."
    answ_a.style.display = "none"
    answ_b.style.display = "none"
    answ_c.style.display = "block"
})

answ_b.addEventListener("click", function() {
    var sp1 = document.getElementById("sp1")
    var sp2 = document.getElementById("sp2")
    var sp3 = document.getElementById("sp3")
    sp1.textContent = " Ok, I will not disturb..."
    sp2.textContent = "                          "
    sp3.textContent = "                          "

    sp1.title = "Добре, не буду заважати..."
    sp2.title = ""
    sp3.title = ""
    answ_a.style.display = "none"
    answ_b.style.display = "none"
})

answ_c.addEventListener("click", function() {
    var sp1 = document.getElementById("sp1")
    var sp2 = document.getElementById("sp2")
    var sp3 = document.getElementById("sp3")
    var clay = document.getElementById("clay")
    var clay2 = document.getElementById("clay2")
    sp1.textContent = "  Ok, but not too much... "
    sp2.textContent = "                          "
    sp3.textContent = "                          "

    sp1.title = "Добре, але не дуже багато..."
    sp2.title = ""
    sp3.title = ""
    answ_c.style.display = "none"

    clay.addEventListener("mouseover", function() {
        clay.textContent = "     Take clay/__"
    })

    clay.addEventListener("mouseout", function() {
        clay.textContent = "     __/   \\__/__"
    })

    clay.addEventListener("click", function() {
        clay.textContent = "     _________/__"

        sp1.textContent = "           ...            "

        sp1.title = "..."

        clay2.textContent = "   "

        clay.addEventListener("mouseover", function() {
            clay.textContent = "     _________/__"
        })

        clay.addEventListener("mouseout", function() {
            clay.textContent = "     _________/__"
        })
    })
})



clay.mouseout = function() {
    clay.textContent = "     __/   \\__/__"
}


carpet_corner.addEventListener("click", function() {
    if (carpet_event === 0) {
        carpet.textContent = "/             ________\\"
        carpet_event = 1
        carpet_corner.textContent = "/ O---'-'  "
        carpet_corner.title = "--> Oh... The key."
    } else if (carpet_event === 1) {
        carpet_event = 2
        carpet_corner.textContent = "/          "
        carpet_corner.title = ""
        for (let i = 0; i < doorknob.length; i++) {
            doorknob[i].title = "--> Now I can open it.";
        }
    }
})

for (let i = 0; i < doorknob.length; i++) {
    doorknob[i].addEventListener("click", function() {
        if (carpet_event === 2) {
            room.innerHTML = room_open.innerHTML
            exit_room.style.display = "block"
        }
    })
}

exit_room.addEventListener("click", function() {
    room.innerHTML = outside.innerHTML
    exit_room.style.display = "none"
    answ_a.style.display = "block"
    answ_b.style.display = "block"
})