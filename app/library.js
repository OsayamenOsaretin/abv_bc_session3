'use strict';

module.exports = {
	/* reverseString() is a function that reverses string 
	*  @param: aString. It checks for palindromes and returns
	*  true.
	*/

	reverseString: (aString) => {


		// check for empty string
		if(aString === undefined){
			return "Please enter a String";
		}

		if(typeof aString === "number"){
			return "Please enter a string, Help me to Help you, Come on human"
		}

		// check for the case of an empty string
		if(aString.length === 0){
			return null;
		}

		// reverse string by splitting into an array, reversing, and putting back together(quite unlike humpty dumpty)

		let splitString = aString.split("");
		let reverseString = splitString.reverse();
		let joinString = reverseString.join("");


		// test for palindrome
		if(joinString === aString){
			return true;
		}else{
			return joinString;
		}

	}
}