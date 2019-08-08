
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

	for (var i = 0; i < 5; i++) {
		var word = "";
		var rand_num = Math.floor(Math.random() * Math.floor(9));
		for (var j = 0; j < rand_num; j++) {
			var rand_letter = Math.floor(Math.random() * letterarray.length);
			word = word.concat(letterarray[rand_letter]);
		}
		word_combine.push(word);
	  }
	
	for (var i = 0; i < word_combine.length; i++) {
	document.getElementById('result').innerHTML = "<div><h2>" + word_combine + " " + "</h2></div>";
	}
}