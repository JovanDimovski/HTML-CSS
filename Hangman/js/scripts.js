// var outerF = function(){
// 	/*console.log("Pritisnavte na: "+id);
// 	document.getElementById("display").innerHTML = id;*/
// 	var string="";
// 	var reset = false;

// 	var calculate = function(string){
// 		var pattern = /\+|\-|\*|\//;
// 		var numbers = string.split(pattern);
// 		for(var i=0;i<numbers.length;i++)
// 		{
// 			numbers[i]=Number(numbers[i]);
// 		}

// 		var operators = [];
// 		for(var i=0;i<string.length;i++){
// 			if(string.charAt(i).match(pattern))
// 				operators.push(string.charAt(i));
// 		}
		
// 		var i=0;
// 		while(i<operators.length)
// 		{
// 			if(operators[i] === "*"){
// 				operators.splice(i, 1);
// 				numbers[i+1]=numbers[i]*numbers[i+1];
// 				numbers.splice(i,1);
// 				i=0;
// 			}else if(operators[i] === "/"){
// 				operators.splice(i, 1);
// 				numbers[i+1]=numbers[i]/numbers[i+1];
// 				numbers.splice(i,1);
// 				i=0;
// 			}else{
// 			i++;
// 			}
// 		}

// 		var i=0;
// 		while(i<operators.length)
// 		{
// 			if(operators[i] === "+"){
// 				operators.splice(i, 1);
// 				numbers[i+1]=numbers[i]+numbers[i+1];
// 				numbers.splice(i,1);
// 				i=0;
// 			}else if(operators[i] === "-"){
// 				operators.splice(i, 1);
// 				numbers[i+1]=numbers[i]-numbers[i+1];
// 				numbers.splice(i,1);
// 				i=0;
// 			}else{
// 			i++;
// 			}
// 		}
// 		return numbers[0];
// 	}

// 	var innerF = function(id){
// 		if(id.match(/b\d/))
// 		{
// 			if(reset){
// 				string="";
// 				reset = false;
// 			}
// 			string+=id.charAt(1);
// 			console.log("ID",id);
// 		}else if(id === "bdiv" || id === "bmult"||id === "bsub"||id === "badd"){
// 			reset = false;
// 			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
// 			{
// 				string = string.substring(0, string.length - 1);
// 			}
// 			if(string.length === 0)
// 				string+="0";
// 			if(id === "bdiv")
// 				string+="/";
// 			else if(id === "bmult")
// 				string+="*";
// 			else if(id === "bsub")
// 				string+="-";
// 			else
// 				string+="+";

// 			console.log("ID",id);
// 		}else if(id === "beq"){
// 			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
// 			{
// 				string = string.substring(0, string.length - 1);
// 			}
// 			string+="=";
// 			string = calculate(string.substring(0, string.length - 1)).toString();
// 			reset = true;
// 			console.log("result:",string);
// 			console.log("ID",id);
// 			//document.getElementById("display").innerHTML = result;
// 		}else if(id === "bCE"){
// 			string = "";
// 		}
// 		if(string.length === 0){
// 			document.getElementById("display").innerHTML = "0";
// 		}else if(string.length === 1 && string == "0"){
// 			string="";
// 		}else{
// 			document.getElementById("display").innerHTML = string;
// 		}
// 	}
// 	return innerF;
// }

// var myFunction = outerF();
// //myFunction("b1");

// document.addEventListener('keydown', function(event) {
// 	//console.log(event.key);
//     if(event.key >= 0 && event.key <=9) {
//     	var key = event.key;
//         //console.log("Key pressed: "+key);
//         myFunction("b"+key.toString())
//     }
//     if(event.key === "*") {/*console.log("Key pressed: *");*/myFunction("bmult")}
//     if(event.key === "+") {/*console.log("Key pressed: +");*/myFunction("badd")}
//     if(event.key === "-") {/*console.log("Key pressed: -");*/myFunction("bsub")}
//     if(event.key === "/") {/*console.log("Key pressed: /");*/myFunction("bdiv")}
//     if(event.key === "=") {/*console.log("Key pressed: =");*/myFunction("beq")}
//     if(event.key === "Enter") {/*console.log("Key pressed: =");*/myFunction("beq")}
// });

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

    // if(event.key >= 0 && event.key <=9) {
    // 	var key = event.key;
    //     //console.log("Key pressed: "+key);
    //     myFunction(key.toString())
    // }
    // if(event.key === "*") {/*console.log("Key pressed: *");*/myFunction("bmult")}
    // if(event.key === "+") {/*console.log("Key pressed: +");*/myFunction("badd")}
    // if(event.key === "-") {/*console.log("Key pressed: -");*/myFunction("bsub")}
    // if(event.key === "/") {/*console.log("Key pressed: /");*/myFunction("bdiv")}
    // if(event.key === "=") {/*console.log("Key pressed: =");*/myFunction("beq")}
    // if(event.key === "Enter") {/*console.log("Key pressed: =");*/myFunction("beq")}
});