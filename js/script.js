
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function generate() {
	var firstvar = document.getElementById('word1').value;
	var lastvar = document.getElementById('word2').value;
	var letterarray = [];
	var word_combine = [];

	for (var i = 0; i < firstvar.length; i++) {
		letterarray.push(firstvar.slice(i, i + 2));
	}
	for (var i = 0; i < lastvar.length; i++) {
		letterarray.push(lastvar.slice(i, i + 2));
	}

	for (var i = 0; i < 1000; i++) {
		var word = "";
		var rand_num = Math.floor(Math.random() * Math.floor(5));
		for (var j = 0; j < rand_num; j++) {
			var rand_letter = Math.floor(Math.random() * letterarray.length);
			word = word.concat(letterarray[rand_letter]);
		}
		console.log("update " + word);
		//struggling to get it to work where it throws away the junk but keeps the keepers
		for (var b = 1; b < word.length; b++) {
			if (word[b].isVowel == true && word[b - 1].isVowel == false) {
				word_combine.push(word);
				console.log("does it work " + word[b]);
			}
		}
	}

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
