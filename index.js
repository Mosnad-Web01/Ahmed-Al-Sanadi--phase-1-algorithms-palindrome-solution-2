function isPalindrome(word) {
	// Loop through the first half of the word
	for (let i = 0; i < word.length / 2; i++) {
		// Calculate the index of the corresponding character from the end of the word
		let j = word.length - 1 - i;

		// Check if the character at the current index is the same as the character at the corresponding index from the end
		if (word[i] === word[j]) {
			// If the characters match, continue to the next iteration
			continue;
		} else {
			// If the characters don't match, the word is not a palindrome, so return false
			return false;
		}
	}

	// If the loop completes without returning false, the word is a palindrome, so return true
	return true;
}
/* Explanation :
1-The for loop iterates through the first half of the word (i.e., word.length / 2 iterations).
2-For each iteration, the function calculates the index j of the corresponding character from the end of the word. This is done by subtracting the current index i from the length of the word minus 1 (word.length - 1 - i).
3-The function then compares the character at the current index i with the character at the corresponding index j from the end of the word.
4-If the characters match, the function continues to the next iteration of the loop.
5-If the characters don't match, the function immediately returns false, as the word is not a palindrome.
6-If the loop completes without returning false, the function returns true, as the word is a palindrome.
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
