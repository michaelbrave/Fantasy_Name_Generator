
var word_combine = [];

function isVowel(c) {
	if (c == 'a'){
		return(true);
	} else if (c == 'e') {
		return(true);
	} else if (c == 'i') {
		return(true);
	} else if (c == 'o') {
		return(true);
	} else if (c == 'u') {
		return(true);
	} else if (c == 'y') {
		return(true);
	} else if (c == 'A') {
		return(true);
	} else if (c == 'E') {
		return(true);
	} else if (c == 'I') {
		return(true);
	} else if (c == 'O') {
		return(true);
	} else if (c == 'U') {
		return(true);
	} else if (c == 'Y') {
		return(true);
	} else {
		return(false); 
	}
}

//word needs one vowel
function hasVowel (str) {
	for (var i = 0; i < str.length; i++) {
		if (isVowel(str[i]))
		{
			console.log("it has a vowel", str);
			return(true);
		}
	}
}

//tripple vowel rejection check
function manyVowelCheck(str) {
	for (var i = 0; i < str.length; i++) {
		if (isVowel(str[i] && isVowel(str[i + 1]) && isVowel(str[i + 2])))
		{
			console.log("it has many vowels", str);
			return(true);
		}
	}
}

//to many consant 4+ check
function manyConsonantCheck(str) {
	for (var i = 0; i < str.length; i++) {
		if (!isVowel(str[i] && !isVowel(str[i + 1]) && !isVowel(str[i + 2]) && !isVowel(str[i + 3])))
		{
			console.log("it has many consonents", str);
			return(true);
		}
	}
}

//big enough
function bigEnough(str) {
	if (str.length > 2) {
		console.log("it's big enough", str);
		return(true);
	}
}

//check duplicates
function notDupe (str) {
	for (var i = 1; i < word_combine.length; i++) {
		if (str == word_combine[i]) {
			return (true);
		}
	}
}

//validates
function wordValidate(str, ) {
	if (hasVowel(str)){
		var h = 1;
	}
	if (!manyVowelCheck(str)) {
		var m = 1;
	}
	//if (!manyConsonantCheck(str)) {
	//	var c = 1;
	//}
	if (bigEnough(str)) {
		var b = 1;
	}
	if (!notDupe(str)) {
		var d = 1;
	}

	if (b == 1 && m == 1 && h == 1 && d == 1) {
		console.log("all are true", str);
		return(true);
	}
}

//check against dictionary, reject those



//greater variation



function generate() {
	var firstvar = document.getElementById('word1').value;
	var lastvar = document.getElementById('word2').value;
	var letterarray = [];


	for (var i = 0; i < firstvar.length; i++) {
		letterarray.push(firstvar.slice(i, i + 2));
	}
	for (var i = 0; i < lastvar.length; i++) {
		letterarray.push(lastvar.slice(i, i + 2));
	}

	for (var i = 0; i < 100; i++) {
		var word = "";
		var rand_num = Math.floor(Math.random() * Math.floor(5));
		for (var j = 0; j < rand_num; j++) {
			var rand_letter = Math.floor(Math.random() * letterarray.length);
			word = word.concat(letterarray[rand_letter]);
		}
		//struggling to get it to work where it throws away the junk but keeps the keepers
		for (var b = 1; b < word.length; b++) {
			if (wordValidate(word)) {
				word_combine.push(word);
			}
		}
	}
	console.log("does it work " + word_combine);

	//for (var i = 0; i < word_combine.length; i++) {
	//document.getElementById('result').innerHTML = "<div><h2>" + word_combine + " " + "</h2></div>";
	//} 

	//how do I make it centered? containin another div? where how?
	for (var c in word_combine) {
		var newElement = document.createElement('result');
		newElement.id = word_combine[c];
		newElement.className = "newword";
		newElement.innerHTML = "<div><h2>" + word_combine[c] + "</h2></div>";
		document.body.appendChild(newElement);
	}
}

//related maybe https://www.freecodecamp.org/forum/t/fun-with-pig-latin-challenge/246411/34
