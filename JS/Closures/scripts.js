//Use this file to implement Part One of your project
console.log('closures');

var nonsense = function(string){
	var blab = function(){
		alert(string);
	}

	//blab();

	//setTimeout(blab,2000);

	return blab;
}

var blabLater = nonsense("Some String");
var blabAgainLater = nonsense("a different String");

var lastNameTrier = function(firstName){
       	var firstName = firstName;
        var innerFunction = function(lastName) { 
            var lastName = lastName;
            console.log(firstName+" "+lastName);
        };
        return innerFunction;
    };
    var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
    firstNameFarmer('Brown'); //logs 'Farmer Brown' 

var storyWriter = function(){
	var string="";
	return {
		addWords:function(wordstoadd){
			string+=wordstoadd;
			console.log(string);
			return string;
		},
		erase:function(){
			string="";
			console.log("Erased "+ string);
		}
	}
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''


var Toaster = function(){
    var toast = "burned";

    var burn = function(shouldItBurn){
    	if(shouldItBurn === true){
    		toast = "burned";
		   	console.log("Toast is " + toast);
    	}
    	else{
		   	console.log("Not " + toast);
    	}
    }
    
    return {
      toast:function(){burn(false)}
    };
};

var Mario = function(){
    var health = 30;

    var heal = function(more){
    	health+=more;
    	console.log(health);
    }
    
    return {
      eatMushroom:function(){heal(30)}
    };
};

var checkAttendanceFunc = function(nameArr){
    	var resultArr = [];
    	for(var i = 0; i < nameArr.length; i++){
    		console.log("Ime:",nameArr[i]," ",i);
    		resultArr.push(
    			function(i){
    			 console.log('Is', nameArr[i], 'present?', i)
    			})
    	};
    	console.log(resultArr);

    	var execAll = function(){
    		for(var i=0;i<resultArr.length;i++)
    		{
    			console.log(i+":");
    			resultArr[i](i);
    		}
    	}
    	return execAll;
};

var cAF= checkAttendanceFunc(["AA","BB","CC","DD"]);
cAF();


var runOnce = function(){
	var count = 0;
	var counter = function(){
		count++;
	}

	return function(funcToRun) {
		if(count === 0){
			counter();
			funcToRun();
		}
		else{
			console.log("NISTO");
		}
	}
}

var rO = runOnce();
function testFunc(){alert("AAAAAAA")};

rO(testFunc);
rO(testFunc);
