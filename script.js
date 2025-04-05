function toCase(text) {
  // write your code here
	if(text === ""){
		return "-";
	}
	let lower = text.toLowerCase();
	let upper = text.toUpperCase();

	return lower+ "-" +upper;
}

//DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
