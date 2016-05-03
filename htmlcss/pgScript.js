function Timer() {
	var display = document.getElementById("timer"),
		now = new Date(),
		curSec = now.getSeconds(),
		endSec = (curSec < 30) ? 30 - curSec : 60 - curSec,
		finSec = (endSec < 10) ? "0" + endSec : endSec;
	display.innerHTML = "00:" + finSec;
	setTimeout(Timer, 1000);
	
	
}

window.onload = function () {
    Timer();
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2");
	button1.addEventListener("click", function(){
		button2.disabled = true;
		button2.style.backgroundColor = "#A08080";
	}, false);	
	button2.addEventListener("click", function(){
		button1.disabled = true;
		button1.style.backgroundColor = "#A08080";
	}, false);
};
