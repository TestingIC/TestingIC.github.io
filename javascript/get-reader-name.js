document.getElementById("submit-reader-name-button").addEventListener("click", function() {
    localStorage["name"] = document.getElementById("input-reader-name-textbox").value
    window.location.assign("../html/introduction.html")
});
