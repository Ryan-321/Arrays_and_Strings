// 1.1 - Is Unique - 0(n)
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
	// Would have to be a nested    
function isUnique(str) {
	const arr = str.split('');
	const charMap = {};
	let unique = true;

	arr.forEach((char) => {
		if(charMap[char]) {
			unique = false;
		} else {
			charMap[char] = true;
		}
	});
	return unique;
}

// 1.2 - Check Permutation - 0(2n)
// Given two strings, write a method to decide if one is a permutation of the other.
function permCheck(str, perm) {
	if(str.length < perm.length) return false;
	const mapStr = {};
	const mapPerm = {};

	// perm is at least str length, so iterate through str length n and create a map for each
	for(let i = 0;i < str.length; i++) {
		const charStr = str[i];
		const charPerm = perm[i];

		if(mapStr[charStr]) {
			mapStr[charStr] += 1;
		} else {
			mapStr[charStr] = 1;
		}

		if(i < perm.length) {
			if(mapPerm[charPerm]) {
				mapPerm[charPerm] += 1;
			} else {
				mapPerm[charPerm] = 1;
			}
		}
	}
	console.log({ mapStr, mapPerm })
	// check each char in perm map exists and not greater than count for that char in str
	for(const [permChar, permCharCount] of Object.entries(mapPerm)) {
		const charStrCount = mapStr[permChar];
		if(permCharCount > charStrCount || !charStrCount) {
			return false;
		}
	}
	return true;
}

// 1.3 - URLify
// Write a method to replace all spaces in a string with '%20'.
// O(2n) w/ split, with a for loop could make O(n), if length matters, could do a check @ the end b/c thats stil worst case
function urlify(str) {
	return str.split('').reduce((acc, ch) => ch.charCodeAt() === 32 ? acc.concat('%20') : acc.concat(ch),'');
}

// 1.4 Palidrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome.
// Example: palin('Tact', 'Cta') = true
function palin(a, b) {
	// see if b is a palindrome, if not return false
	let l = b.length - 1;
	// const isEven = b.length % 2 === 0;
	const middle = Math.round(b.length / 2);
	// if b length even, ex. anna, have to check inner middle, odd, ex. racecar, both sides would check 'e', so <=
	for(let i = 0; i <= middle; i++) {
		console.log({ i: b[i], l: b[l] });
		if(b[i].toLowerCase() === b[l].toLowerCase()) {
			l -= 1;
		} else {
			return false;
		}
	}
	// check if b is a permuation of a
	const isPerm = permCheck(a, b);
	console.log({ isPerm, palin: true })
	return isPerm;
}
  // console.log(palin('t racecar ds', 'racecar'));



module.exports = {
	isUnique,
	permCheck,
	urlify,
	palin
}