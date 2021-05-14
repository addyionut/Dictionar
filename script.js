var wordList = new Set();
function addWord() {
	let word = document.getElementById('wordToAdd').value;
	wordList.add(word);
	document.getElementById('printAdd').innerHTML = "Word saved in the dictionary";
}

function searchWord() {
	let checkWord = document.getElementById('wordToCheck').value;
	if (wordList.has(checkWord)) {
		document.getElementById("printCheck").innerHTML = "This word is in the dictionary";
		document.getElementById("printCheck").style.color = 'green';
	}
	else {
		document.getElementById("printCheck").innerHTML = "This word is not in the dictionary";
		document.getElementById("printCheck").style.color = 'red';
	}
}