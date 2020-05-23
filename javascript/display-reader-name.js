//Go from "Hello"
var newIntroduction = document.getElementById('name-introduction').textContent.concat(" ", localStorage['name'], '!')

document.getElementById('name-introduction').textContent = newIntroduction
    
if (localStorage["name"].includes("lita") == true || localStorage["name"].includes("Lita") == true ) {
    document.getElementById("special-introduction").textContent = "(<3)"
}
else if (localStorage["name"].includes("etourneau") == true) {
    document.getElementById("special-introduction").textContent = "(Hope the baby is doing well!)"
}
else if (localStorage["name"].includes("saac") == true) {
    document.getElementById("special-introduction").textContent = "(The man, the myth, the legend!)"
}
else if (localStorage["name"].includes("mom") == true || localStorage["name"].includes("Mom") == true || localStorage["name"].includes("sue") == true || localStorage["name"].includes("Sue") == true || localStorage["name"].includes("suzanne") == true || localStorage["name"].includes("Suzanne") == true) {
    document.getElementById("special-introduction").textContent = "(Thank you, for everything. Best mom in the world.)"
}
else if (localStorage["name"].includes("ichie") == true || localStorage["name"].includes("ichard") == true) {
    document.getElementById("special-introduction").textContent = "(Even though you are the most annoying brother in the world, thank you, you've helped me more than you'll ever know.)"
}
else if (localStorage["name"].includes("arianna") == true) {
    document.getElementById("special-introduction").textContent = "(You'll always be more cool than me, just please for the love of god don't have almonds open next time!)"
}
else if (localStorage["name"].includes("onica") == true || localStorage["name"].includes("wde") == true) {
    document.getElementById("special-introduction").textContent = "(And especially thank you, even though I screwed up a lot and made a lot of stupid mistakes in your classes. You kept me hooked with an evergrowing interest of computer science and that means the world.)"
}

document.getElementById("goto-home-button").addEventListener("click", function() {
    window.location.assign("../html/home.html")
})