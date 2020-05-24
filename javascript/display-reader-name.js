//Go from "Hello"
var newIntroduction = document.getElementById('name-introduction').textContent.concat(" ", localStorage['name'], '! 👋')

document.getElementById('name-introduction').textContent = newIntroduction
    
if (localStorage["name"].includes("alita") == true || localStorage["name"].includes("Alita") == true ) {
    document.getElementById("special-introduction").textContent = "(<3)"
}
else if (localStorage["name"].includes("letourneau") == true || localStorage["name"].includes("Letourneau") == true) {
    document.getElementById("special-introduction").textContent = "(Hope the baby is doing well!)"
}
else if (localStorage["name"].includes("isaac") == true || localStorage["name"].includes("Isaac") == true) {
    document.getElementById("special-introduction").textContent = "(The man, the myth, the legend!)"
}
else if (localStorage["name"].includes("mom") == true || localStorage["name"].includes("Mom") == true || localStorage["name"].includes("sue") == true || localStorage["name"].includes("Sue") == true || localStorage["name"].includes("suzanne") == true || localStorage["name"].includes("Suzanne") == true) {
    document.getElementById("special-introduction").textContent = "(Thank you, for everything. Best mom in the world.)"
}
else if (localStorage["name"].includes("richie") == true || localStorage["name"].includes("Richie") == true || localStorage["name"].includes("richard") == true || localStorage["name"].includes("Richard") == true) {
    document.getElementById("special-introduction").textContent = "(Even though you are the most annoying brother in the world, thank you, you've helped me more than you'll ever know.)"
}
else if (localStorage["name"].includes("marianna") == true || localStorage["name"].includes("Marianna") == true) {
    document.getElementById("special-introduction").textContent = "(You'll always be more cool than me, just please for the love of god don't have almonds open next time!)"
}
else if (localStorage["name"].includes("awde") == true || localStorage["name"].includes("Awde") == true) {
    document.getElementById("special-introduction").textContent = "(And especially thank you, even though I screwed up a lot and made a lot of stupid mistakes in your classes. You kept me hooked with an evergrowing interest of computer science and that means the world.)"
}
else if (localStorage["name"].includes("maggie") == true || localStorage["name"].includes("Maggie") == true) {
    document.getElementById("special-introduction").textContent = "(We have got to do some car rides while screaming musicals soon! It's been too long! Also, thank you, for being there since that first post I made on SC, it means a lot that you've stuck around this long.)"
}
else if (localStorage["name"].includes("pierson") == true || localStorage["name"].includes("Pierson") == true) {
    document.getElementById("special-introduction").textContent = "(Just wanted to say thank you, for being the absolute smartest but also the most stupid friend I've ever had. And for helping me through softmore year, even if it wasn't obvious, you helped me through a lot of tough times. So, thanks, it means a lot.)"
}
else if (localStorage["name"].includes("eleni") == true || localStorage["name"].includes("Eleni") == true) {
    document.getElementById("special-introduction").textContent = "(Thanks for the help throughout the years, definetly wouldn't be who I am without you helping me through Physics, History, Etc.)"
}
document.getElementById("goto-home-button").addEventListener("click", function() {
    window.location.assign("../html/home.html")
})
