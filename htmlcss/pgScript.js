$(document).ready(function(){
  $('#counter1').on('click', function(e){
    e.preventDefault();
  });

});


function getDat(){
  console.log("hola");
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=AJMjXxj5wXnTDjLmAguBhhjlksAb7qnv" 
  }).done(function(data){
    console.log(data);
  });
}

function Timer() {
	var display = document.getElementById("timer"),
		now = new Date(),
		curSec = now.getSeconds(),
		endSec = (curSec < 30) ? 30 - curSec : 60 - curSec,
		finSec = (endSec < 10) ? "0" + endSec : endSec;
	display.innerHTML = "00:" + finSec;
	if(1 === endSec) {
		setTimeout(ender, 1000);
	}
	setTimeout(Timer, 1000);
}

function ender() {
	
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2"),
		wintext = document.getElementById("wintext"),
		fval = Math.random();
	if(button2.disables === true) {
		fval = fval + 0.25;
	}
	if(button1.disables === true) {
		fval = fval - 0.25;
	}
	
	if(Math.random() < 0.5) {
		winner = button1;
	}
	else {
		winner = button2;
	}
	
	winner.style.backgroundColor = "yellow";
	wintext.style.display = "visible";
	wintext.innerHTML = "WINNER";
	setTimeout(resetPage, 750);
}

function resetPage() {
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2"),
		wintext = document.getElementById("wintext");
	button1.style.backgroundColor = "green";
	button2.style.backgroundColor = "red";
	button1.disables = false;
	button2.disables = false;
	button1.addEventListener("click", b1Click, false);
	button2.addEventListener("click", b2Click, false); 
	wintext.style.display = "hidden";
	
}

function b1Click() {
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2");
	if(button1.disables === false) {
		button2.disables = true;
		button2.style.backgroundColor = "#A08080";	
	}
}

function b2Click() {
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2");
	if(button2.disables === false) {
		button1.disables = true;
		button1.style.backgroundColor = "#A08080";
	}
}

window.onload = function () {
    Timer();
	resetPage(); 
};
