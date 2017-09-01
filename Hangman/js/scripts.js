var wordList = ["Apple","Pear","Banana","Monkey","Computer","House","Street","Sky","Book","Thermometer"];

var outerF = function()
{
	//var count = 0;
	var missCount;
	var word;
	var wordchars = [];
	var hits = [];
	var misses = [];
	var HTMLword = '';

	var reset = function(arg){
		//console.log("Reset "+ arg);
		missCount = 0;
		word = wordList[Math.floor(Math.random()*10)];
		wordchars = word.split('');
		hits = [];
		misses = [];
		for (var i = 0; i < wordchars.length; i++) {
			hits[i] = false;
		};
		console.log("Word is: " + word + " length " + word.length);
		HTMLword = document.getElementById("word");
		HTMLword.innerHTML = "";

		for(var i=0;i<word.length;i++)
		{
			var element = document.createElement("DIV");
			element.setAttribute("id", "l"+i);
			element.setAttribute("class", "letter_c");
			HTMLword = document.getElementById("word").appendChild(element);//'<div id="l'+i+'" class="letter_c"></div>');
		}

		document.getElementById("hangman").setAttribute("src", "./img/Hangman-0.png");

		document.getElementById("missed").innerHTML	= "";
		//console.log("End of initizlize: " + missCount);	
	}

	var check = function(letter){
		//console.log("In Check Misses"+ missCount);
		if(missCount < 6){
			var temp = false;
			for (var i = 0; i < wordchars.length; i++) {
				if(letter.toUpperCase() == wordchars[i].toUpperCase()){
					hits[i] = true;
					document.getElementById("l"+i).innerHTML = letter.toUpperCase();
					temp = true;
				}
			}
			if(temp == false){
				var temp2 = false;
				for (var i = 0; i < misses.length; i++) {
					if(misses[i].toUpperCase()==letter.toUpperCase()){
						temp2 = true;
					}
				}
				if(temp2 == false){
					misses.push(letter.toUpperCase());
					var element = document.createElement("DIV");
					element.setAttribute("id", "l"+i);
					element.setAttribute("class", "m_letter_c");
					element.innerHTML = letter.toUpperCase();
					var generateHere = document.getElementById("missed").appendChild(element);
					missCount++;
				}
				console.log("Misses: " + misses);
				document.getElementById("hangman").setAttribute("src", "./img/Hangman-"+missCount+".png");
				if(missCount == 6){
					for(var i=0;i<hits.length;i++){
						if(hits[i]==false){
							var element = document.getElementById("l"+i);
							element.innerHTML = wordchars[i].toUpperCase();
							element.setAttribute("style", "color: red");
						}
					}
				}
			}
			//console.log("Hits: " + hits);
		}else{
			console.log("No more tries");
		}
		//count++;
		console.log("Number of misses: "+ missCount);
	}

	var innerF = function(id){
		console.log(id + ' Count ' + count);
		count++;
	}
	return {
		check: check,
		reset: reset
	}
}

var outO = outerF();
var reset = outO.reset;

reset("on initialize");

var myFunction = outO.check;

document.addEventListener('keydown', function(event) {
	//console.log(event.key);
	if(event.key.match(/^[a-zA-Z]$/)){
		//console.log("AAAAAA: "+event.key);
		myFunction(event.key.toString())
	}
});