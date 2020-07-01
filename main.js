/******************
 * YOUR CODE HERE *
 ******************/
const indexedChars = (chars) => {
  let emptyString = '';
  for (let i = 0; i < chars.length; i++) {
    emptyString += i + chars[i]; //whats this line saying again??
  }
  return emptyString;
}

const exclaim = (str) => {
  let emptyString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      emptyString += '!' ;
    } else if (str[i] === '?') {
      emptyString += '!' ;
    } else {
      emptyString += str[i];
    }
  }
  return emptyString
}

const repeatIt = (str, num) => {
  let emptyString = '';
  for (let i = 0; i < num; i++) {
    emptyString += str;
}
return emptyString
}

// const truncate = (sentence, num) => {
//   let emptyString = '';
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence.length >= 15) {
//       return sentence.slice(0,15) + '...';
//     } else if (sentence.length <= 18) {
//       return sentence
//     }
//   }
// // return emptyString;
// }

const truncate = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.length <= 18) {
      return sentence;
    } else {
      return sentence.slice(0, 15) + '...';
    }
}
}

function reverse(str){
  let reversed = "";    
  for (let i = str.length - 1; i >= 0; i--){ //dont understand why I had to add - 1 if im already going backwards       
    reversed += str[i];
  }    
  return reversed;
}

const ciEmailify = (emailName) => {
  let emptyString = ''; // creates empty string 
  for (let i = 0; i < emailName.length; i++){// i starts at 0; while i is less than the length of param;
//increment by 1
    if(emailName[i] === ' '){//if param at the index of 0 = a space
      emptyString+= '.';// " " + .
    }else {
      emptyString += emailName[i];// or else, if there isnt a space add ' ' and every individual char in the param.
    }
  }
  return emptyString.toLowerCase() + '@codeimmersives.com';
}

const onlyVowels = (str) => {
  let emptyString = ''
  let vowels = 'aeoiuAEOIU' 
  for (i = 0; i < str.length; i++) {
    if (vowels === str[i]) {
      emptyString += str[i];
    }
  } 
  return emptyString;
}

const numberedChars = (str) => {
  let num = 1;
  let emptyString = '';
  for (let i = 0; i < str.length; i++) {
    if (str.length === 1) {
      emptyString += '(' + num + ')' + str[i];
    } 
    if (str.length >= 2) {
      emptyString += '(' + num++ + ')' + str[i];

    }
    
  }  
  return emptyString
}

const crazyCase = (str) => { 
  let emptyString = '';
  for (let i = 0; i < str.length; i++){
    if(str[i] % 2 === 0){
      emptyString += str[i].toUpperCase();
    } else {
      emptyString += str[i].toLowerCase();
    }
  }
  return emptyString;
}

const titleCase = (str) => {
  let emptyString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      emptyString += str[i].toUpperCase();

    }

  }
  return emptyString;
}












/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
