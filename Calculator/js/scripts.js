var outerF = function(){
	/*console.log("Pritisnavte na: "+id);
	document.getElementById("display").innerHTML = id;*/
	var string="";
	var reset = false;

	var calculate = function(string){
		var pattern = /\+|\-|\*|\//;
		var numbers = string.split(pattern);
		for(var i=0;i<numbers.length;i++)
		{
			numbers[i]=Number(numbers[i]);
		}
		console.log(numbers);
		var pattern = /\d+/;
		var operators = string.split(pattern);
		operators.shift();
		operators.pop();
		console.log(operators);
		var i=0;
		while(i<operators.length)
		{
			if(operators[i] === "*"){
				operators.splice(i, 1);
				numbers[i+1]=numbers[i]*numbers[i+1];
				numbers.splice(i,1);
				i=0;
			}else if(operators[i] === "/"){
				operators.splice(i, 1);
				numbers[i+1]=numbers[i]/numbers[i+1];
				numbers.splice(i,1);
				i=0;
			}else{
			i++;
			}
		}
		console.log(numbers);
		console.log(operators);

		var i=0;
		while(i<operators.length)
		{
			if(operators[i] === "+"){
				operators.splice(i, 1);
				numbers[i+1]=numbers[i]+numbers[i+1];
				numbers.splice(i,1);
				i=0;
			}else if(operators[i] === "-"){
				operators.splice(i, 1);
				numbers[i+1]=numbers[i]-numbers[i+1];
				numbers.splice(i,1);
				i=0;
			}else{
			i++;
			}
		}
		console.log(numbers);
		console.log(operators);

		return numbers[0];
	}

	var innerF = function(id){
		if(id === "b1"){
			if(reset){
				string="";
				reset = false;
			}
			string+="1";
		}else if(id === "b2"){
			if(reset){
				string="";
				reset = false;
			}
			string+="2";
		}else if(id === "b3"){
			if(reset){
				string="";
				reset = false;
			}
			string+="3";
		}else if(id === "b4"){
			if(reset){
				string="";
				reset = false;
			}
			string+="4";
		}else if(id === "b5"){
			if(reset){
				string="";
				reset = false;
			}
			string+="5";
		}else if(id === "b6"){
			if(reset){
				string="";
				reset = false;
			}
			string+="6";
		}else if(id === "b7"){
			if(reset){
				string="";
				reset = false;
			}
			string+="7";
		}else if(id === "b8"){
			if(reset){
				string="";
				reset = false;
			}
			string+="8";
		}else if(id === "b9"){
			if(reset){
				string="";
				reset = false;
			}
			string+="9";
		}else if(id === "b0"){
			if(reset){
				string="";
				reset = false;
			}
			string+="0";
		}else if(id === "bdiv"){
			reset = false;
			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
			{
				console.log("Works");
				string = string.substring(0, string.length - 1);
			}
			if(string.length === 0)
				string+="0";
			string+="/";
		}else if(id === "bmult"){
			reset = false;
			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
			{
				console.log("Works");
				string = string.substring(0, string.length - 1);
			}
			if(string.length === 0)
				string+="0";
			string+="*";
		}else if(id === "bsub"){
			reset = false;
			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
			{
				console.log("Works");
				string = string.substring(0, string.length - 1);
			}
			if(string.length === 0)
				string+="0";
			string+="-";
		}else if(id === "badd"){
			reset = false;
			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
			{
				console.log("Works");
				string = string.substring(0, string.length - 1);
			}
			if(string.length === 0)
				string+="0";
			string+="+";
		}else if(id === "beq"){
			if(string.charAt(string.length - 1).match("/|\\*|\\+|\\-"))
			{
				console.log("Works");
				string = string.substring(0, string.length - 1);
			}
			string+="=";
			string = calculate(string.substring(0, string.length - 1)).toString();
			reset = true;
			console.log("result:",string);

			//document.getElementById("display").innerHTML = result;
		}else if(id === "bCE"){
			string = "";
		}
		if(string.length === 0){
			document.getElementById("display").innerHTML = "0";
		}else{
			document.getElementById("display").innerHTML = string;
		}
	}
	return innerF;
}

var myFunction = outerF();
//myFunction("b1");
