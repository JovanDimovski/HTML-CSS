//Use this file to implement Part One of your project
console.log('functions');

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