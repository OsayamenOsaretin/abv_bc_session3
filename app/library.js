'use strict'

module.exports =  {

	/** findMissing() collects two arrays(firstArray, secondArray) and returns the missing number from the shorter
	* 	array, that is present in the longer
	*/

	findMissing: (firstArray, secondArray) => {
		let missingNumber;

		// first sort the arrays, sort uses introsort takes (nlogn) time, averagely
		firstArray = firstArray.sort();
		secondArray = secondArray.sort();

		/* Iterate through both arrays, send back value from longer array if 
		*  equal
		*/


		let firstLength = firstArray.length;
		let secondLength = secondArray.length;

		if(firstLength === 0 && secondLength === 0){
			return 0;
		}else if(firstLength === secondLength){
			return 0;
		}
		
		for (let i = 0; i < secondLength; i++){
			if(firstArray[i] != secondArray[i]){
				return secondArray[i];
			}
		}

	}


}