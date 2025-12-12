let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

function enableDarkmode(){
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

function disableDarkmode() {
    document.body.classList.remove("darkmode")
    localStorage.removeItem("darkmode")
}

themeSwitch.addEventListener("click", function () {
    if (localStorage.getItem("darkmode") === "active") {
        disableDarkmode();
    } else {
        enableDarkmode();
    }
});



function showTab(name){
    document.getElementById('trending-cards').style.display="none";
    document.getElementById('trending-cards2').style.display="none";
    document.getElementById('trending-cards3').style.display="none";
    document.getElementById(name).style.display="flex";

}