var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'nick172',
	database : 'cmpe_172_game'
});

connection.connect();

function Timer() {
	var display = document.getElementById("timer"),
		now = new Date(),
		curSec = now.getSeconds(),
		endSec = (curSec < 30) ? 30 - curSec : 60 - curSec,
		finSec = (endSec < 10) ? "0" + endSec : endSec;
	display.innerHTML = "00:" + finSec;
	setTimeout(Timer, 1000);
	
	
}

function b1Click() {
	button2.disables = true;
	button2.style.backgroundColor = "#A08080";
	connection.query('SELECT points FROM score WHERE color = 'green'', function (err, rows, fields) {
		if(err) throw err;
		var curpt = rows[0].points + 1;
		connection.query('UPDATE score SET points = ' + curpt + ' WHERE name = 'green'', function(err, rows, fields) {
			if(err) throw err;
		});  
	}	
}

function b2Click() {
        button1.disables = true;
        button1.style.backgroundColor = "#A08080";
	connection.query('SELECT points FROM score WHERE color = 'green'', function (err, rows, fields) {
                if(err) throw err;
                var curpt = rows[0].points + 1;
                connection.query('UPDATE score SET points = ' + curpt + ' WHERE name = 'green'', function(err, rows, fields) {
                        if(err) throw err;
                });
        }

}


window.onload = function () {
    Timer();
	var button1 = document.getElementById("counter1"),
		button2 = document.getElementById("counter2");
	button1.addEventListener("click", b1Click, false);
	button2.addEventListener("click", b2Click, false); 
};

connection.end();
