$(document).ready(function(){
  var st = srvTime();
  Timer(st);
  resetPage();


  $('#counter1').on('click', function(e){
    var button1 = document.getElementById("counter1"),
        button2 = document.getElementById("counter2");
    if(button1.disables === false) {
      button2.disables = true;
      button2.style.backgroundColor = "#A08080";
    }
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


  $('#counter2').on('click', function(e){ 
    var button1 = document.getElementById("counter1"),
        button2 = document.getElementById("counter2");
    if(button2.disables === false) {
      button1.disables = true;
      button1.style.backgroundColor = "#A08080";
    }
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

function Timer(st) {
	var display = document.getElementById("timer"),
                now = new Date(st),
		st = now.getTime() + 1000,
		curSec = now.getSeconds(),
		endSec = (curSec < 30) ? 30 - curSec : 60 - curSec,
		finSec = (endSec < 10) ? "0" + endSec : endSec;
        display.innerHTML = "00:" + finSec;
     	if(28 === endSec) {
		resetScore();
	}
	}
	if(1 === endSec) {
		setTimeout(ender, 1000);
	}
	setTimeout(Timer, 1000, st);
}

function ender() {
  var button1 = document.getElementById("counter1"),
      button2 = document.getElementById("counter2"),
      wintext = document.getElementById("wintext");
	
  $.ajax({
    url:  "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq"
  }).done(function(data){
    var redc = data[0].red,
        greenc = data[0].green;

    if(greenc > redc) {
      var winner = button1,
          winname = "green";
    }
    else {
      var winner = button2,
          winname = "red";  
    }
	
    winner.style.backgroundColor = "#FFDF00";
    wintext.innerHTML = "The winner is: " + winname;
  });
  setTimeout(resetPage, 5000);
}

function resetScore() {
  $.ajax({
    url:  "https://api.mlab.com/api/1/databases/cmpe172game/collections/score?apiKey=zSElocti0xgz1UhZKYD9ezXcaMO7BFqq",
    data: JSON.stringify( { "$set" : { "red" : 0 , "green" : 0 } } ),
    type: "PUT",
    contentType: "application/json"
  });
}

function resetPage() {
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2"),
		wintext = document.getElementById("wintext");
	button1.style.backgroundColor = "green";
	button2.style.backgroundColor = "red";
	button1.disables = false;
	button2.disables = false;
	wintext.innerHTML = "";
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

