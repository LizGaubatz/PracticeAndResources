// // Create alphabet array: ['a', 'b', 'c', ..., 'z'].
// const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// /**
//  * Generates a cipher map out of the alphabet.
//  * Example with a shift 3: {'a': 'd', 'b': 'e', 'c': 'f', ...}
//  *
//  * @param {string[]} alphabet - i.e. ['a', 'b', 'c', ... , 'z']
//  * @param {number} shift - i.e. 3
//  * @return {Object} - i.e. {'a': 'd', 'b': 'e', 'c': 'f', ..., 'z': 'c'}
//  */
// const getCipherMap = (alphabet, shift) => {
//   return alphabet
//     .reduce((charsMap, currentChar, charIndex) => {
//       const charsMapClone = { ...charsMap };
//       // Making the shift to be cyclic (i.e. with a shift of 1 - 'z' would be mapped to 'a').
//       let encryptedCharIndex = (charIndex + shift) % alphabet.length;
//       // Support negative shifts for creating a map for decryption
//       // (i.e. with shift -1 - 'a' would be mapped to 'z').
//       if (encryptedCharIndex < 0) {
//         encryptedCharIndex += alphabet.length;
//       }
//       charsMapClone[currentChar] = alphabet[encryptedCharIndex];
//       return charsMapClone;
//     }, {});
// };

// /**
//  * @param {string} str
//  * @param {number} shift
//  * @param {string[]} alphabet
//  * @return {string}
//  */
// export const caesarCipherEncrypt = (str, shift, alphabet = englishAlphabet) => {
//   // Create a cipher map:
//   const cipherMap = getCipherMap(alphabet, shift);
//   return str
//     .toLowerCase()
//     .split('')
//     .map((char) => cipherMap[char] || char)
//     .join('');
// };

// /**
//  * @param {string} str
//  * @param {number} shift
//  * @param {string[]} alphabet
//  * @return {string}
//  */
// export const caesarCipherDecrypt = (str, shift, alphabet = englishAlphabet) => {
//   // Create a cipher map:
//   const cipherMap = getCipherMap(alphabet, -shift);
//   return str
//     .toLowerCase()
//     .split('')
//     .map((char) => cipherMap[char] || char)
//     .join('');
// };





// MINE 


// // Case Sensitive
// function isUpperCase(str) {
//   return str === str.toUpperCase
// }

// // Decipher str
// let CesarCipher = (str, num) => {
//   let cipher = '';

//   // Letter by letter
//   for(let i = 0; i < str.length; i++){

//     // if letter is uppercase, add uppercase letters
//     if(isUpperCase(str[i])){
//       cipher += String.fromCharCode((str.charCodeAt(i) + num - 65) % 26 + 65);
//     } else {
//       cipher += String.fromCharCode((str.charCodeAt(i) + num -97) % 26 + 97)
//     }
//   }
//   return cipher
// }

// console.log(CesarCipher("Hello", 5))







// Case Sensitive
function isUpperCase(str) {
  if(str === str.toUpperCase()) {
    return true
  } else {
    return false
  }
}

// Decipher str
let CesarCipher = (str, num) => {
  let cipher = '';

  // Letter by letter
  for(let i = 0; i < str.length; i++) {
    // console.log(String.fromCharCode(65))

    // Check for spaces
    if (str[i] === " "){
      cipher += " ";

    // if letter is uppercase, add uppercase letters
    } else if(isUpperCase(str[i]) === true) {
      cipher += String.fromCharCode((str.charCodeAt(i) + num - 65) % 26 + 65);
      console.log("UC 1", (str.charCodeAt(i) + num - 65) % 26 + 65);  
      // console.log("Uppercase")
    } else {
      cipher += String.fromCharCode((str.charCodeAt(i) + num - 97) % 26 + 97);
      // console.log("LC", (str.charCodeAt(i) + num - 97) % 26 + 97);
      // console.log("Lowercase")
    }
  }
  return cipher
}

console.log(CesarCipher("HEllo Yorld", 5))

// Mn Ymjwjj
// String.fromCharCode(c.charCodeAt(0) + num)