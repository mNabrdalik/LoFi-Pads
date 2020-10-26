/*Dodać alert z instrukcją użytkowania. Pierwsze 8 padów to perksuja. 4 zielone to loopy melodi, a 4 czerwone są do wyłączania loopów. Rekomendowanie użycie telefonu lub sprzętu z dodytkowym ekranem. */
alert("PL: \nSzare Pady - perkusja \nZielone Pady - loopy z melodią \nCzerwone Pady - wyłączają znajdujące się na nimi loopy \nZalecane stosowanie na smartphonie oraz urządzeniach z dotykowym ekranem.\nPowodzenia! \n\nENG: \nGrey Pads - drum \nGreen Pads - melodic loops \nRed Pads - switch off loops from above \nRecommended for use on smarthphones and devices with touch screen. \nEnjoy!");

const btn1= document.querySelector("#pad1");
const btn2 = document.querySelector("#pad2");
const btn3= document.querySelector("#pad3");
const btn4 = document.querySelector("#pad4");
const btn5= document.querySelector("#pad5");
const btn6 = document.querySelector("#pad6");
const btn7= document.querySelector("#pad7");
const btn8 = document.querySelector("#pad8");


function togglePlay1() {
    btn1.paused ? btn1.play() : btn1.pause();
};
function togglePlay2() {
    btn2.paused ? btn2.play() : btn2.pause();
};
function togglePlay3() {
    btn3.paused ? btn3.play() : btn3.pause();
};
function togglePlay4() {
    btn4.paused ? btn4.play() : btn4.pause();
};
function togglePlay5() {
    btn5.paused ? btn5.play() : btn5.pause();
};
function togglePlay6() {
    btn6.paused ? btn6.play() : btn6.pause();
};
function togglePlay7() {
    btn7.paused ? btn7.play() : btn7.pause();
};
function togglePlay8() {
    btn8.paused ? btn8.play() : btn8.pause();
};

