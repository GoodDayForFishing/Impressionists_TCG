let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.removeItem("darkmode")
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
// 


function showTab(name){
    document.getElementById('trending-cards').style.display="none";
    document.getElementById('trending-cards2').style.display="none";
    document.getElementById(name).style.display="flex";

}