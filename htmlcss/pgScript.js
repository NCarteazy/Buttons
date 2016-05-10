$(document).ready(function(){
  $('#counter1').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url:  "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq"
    }).done(function(data){
        var gpp = data[0].green + 1;
        $.ajax({
          url:  "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq",
          data: JSON.stringify( { "$set" : { "green" : gpp } } ),
          type: "PUT",
          contentType: "application/json" 
        });
      });
  });
});

$(document).ready(function(){
  $('#counter2').on('click', function(e){ 
     e.preventDefault();
     $.ajax({
      url:  "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq" 
    }).done(function(data){
        var gpp = data[0].red + 1;
        $.ajax({
          url:  "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq",
          data: JSON.stringify( { "$set" : { "red" : gpp } } ),
          type: "PUT",             
          contentType: "application/json"
        });
      });
  });
});


function getDat(){
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq" 
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

function srvTime() {
	var xmlHttp;
	try {
	    //FF, Opera, Safari, Chrome
	    xmlHttp = new XMLHttpRequest();
	}
	catch (err1) {
	  	//IE
		try {
       		 xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
    		}
    	catch (err2) {
        	try {
        	xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        	}
        catch (eerr3) {
            	//AJAX not supported, use CPU time.
            	alert("AJAX not supported");
        }
    	}
	}
	xmlHttp.open('HEAD',window.location.href.toString(),false);
	xmlHttp.setRequestHeader("Content-Type", "text/html");
	xmlHttp.send('');
	return xmlHttp.getResponseHeader("Date");
} 
}

window.onload = function () {
    	var st = srvTime();
	console.log(st)
	Timer();
	resetPage(); 
};
