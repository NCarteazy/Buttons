var buttEvent = function (event) {
    console.log("method called");
    var me = event.target
    ,   square = document.getElementById("square");
    square.style.backgroundColor = "#ffaa44";
    me.setAttribute("disabled", "disabled");
    setTimeout(function () { clearDemo(me) }, 2000);
}

function clearDemo(button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.removeAttribute("disabled");
}

function Timer() {
	var display = document.querySelector('#time'),
		now = new Date(),
		curSec = now.getSeconds(),
		endSec = (curSec < 30) ? 30 - curSec : 60 - curSec,
		finSec = (endSec < 10) ? "0" + endSec : endSec;
	display.innerHTML = "00:" + finSec;
	setTimeout(Timer, 1000);
}

var button = document.querySelector("button"); 
button.addEventListener("click", buttEvent); 

window.onload = function () {
    
    Timer();
};
