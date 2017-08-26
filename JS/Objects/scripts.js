//Use this file to implement Part One of your project
console.log('animal');

var animal = {"123": 123};
animal.username = "DaffyDuck";
animal["tagline"] = "Yippeee";
var noises =[];
animal.noises = noises;

var count = 0;
for(var key in animal)
{
	count=count+1;
	if(key === "username"){
		console.log('Hi my name is ' + animal[key]);	
	}
	else if(key === "tagline"){
	console.log('I like to say ' + animal[key]);		
	}

}
//document.getElementById("ptag").innerHTML = 'AAAAAAAAAAA';