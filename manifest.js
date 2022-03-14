console.log('tpp');
let btn = document.querySelector("cumpara");
let div = document.querySelector("header-content");
btn.addEventListener("click", () => {
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});
const btnClosePopUp = document.getElementById('closePop');
const popUpVis = document.getElementById('popUp').style.display;
const titlu = document.getElementById('titlu')
console.log('btnClosePopUp');

function hidePopUp() {
    titlu.style.display = 'none';
}
btnClosePopUp.addEventListener('mousedown', hidePopUp);