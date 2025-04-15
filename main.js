function verifyGrade() {
	let grade = document.getElementById('inputGrade').value;
	grade = parseInt(grade);  

	if (isNaN(grade)) {
		window.alert("Please enter a valid grade.");
		return;
	}

	if (grade < 75) {
		window.alert("You have failed.");
	} else if (grade >= 75 && grade < 85) {
		window.alert("You passed, but need improvement.");
	} else {
		window.alert("You passed with a good grade!");
	}
	}