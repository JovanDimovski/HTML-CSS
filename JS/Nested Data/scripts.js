//Use this file to implement Part One of your project
console.log('nesting');

var AnimalTestUser = function(username){
	var otherArgs = [];
	var argNum = arguments.length;
	if(argNum >1){
		for(var i = 1; i <arguments.length;i++)
		{
			otherArgs[i-1] = arguments[i];
		}
	}
	return {username: username,otherArgs: otherArgs}
}

var testSheep =AnimalTestUser('Cottonball', {'loves dancing': true}, [1,2,3]);
console.log(testSheep);

var AnimalCreator = function(username,species,tagline,noises){
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: []
	}
}

var addFriend = function(first,second){
	first.friends.push(second);
	return first;
}

var addFriendName = function(first,second){
	first.friends.push(second.username);
	return first;
}

var myFarm = [];
var dog = AnimalCreator("dog","dog","bark",["bark","arf"]);
var cat= AnimalCreator("Cat","cat","meow",["meow","hiss"]);
var cow = AnimalCreator("cow","cow","moo",["moo","mooooo"]);
var rabbit= AnimalCreator("rabbit","rabbit","ciu",["ciu"]);
addFriend(cat,dog);
addFriend(cow,rabbit);
addFriend(dog,cat);
addFriend(rabbit,cow);
myFarm.push(dog,cat,cow,rabbit);

var addMatchesArray = function(farm){
	for(var i=0;i<farm.length;i++)
	{
		farm[i].matches = [];
	}
}

var giveMatches = function(farm){
	for(var i=0;i<farm.length;i++)
	{
		farm[i].matches = farm[i].friends[0];
	}
}

addMatchesArray(myFarm);
console.log(myFarm);

giveMatches(myFarm);
console.log(myFarm);

console.log("NESTING");

var friendlist = [];
var friends = [];

for(var i =0;i<myFarm.length;i++)
{
	if(i>1){
		break;
	}
	friends.push(myFarm[i].username);
}
console.log("Treba da se dve zivotni: ",friends);

var relationships = {};
relationships.friends = friends;

console.log("Objekt so dvete zivotni vo niza: ",relationships);
console.log("Dolzina na objekt??: ",relationships.length);//???

var matches = [];
relationships.matches = matches;

relationships.matches.push(myFarm[0].username);

console.log("Objekt so dve nizi: ",relationships);

for (var i = myFarm.length - 1; i >= 0; i--) {
	myFarm[i].relationships = relationships;
}

console.log("Cetiri zivotni so relationsjip objekt vnatre: ", myFarm);