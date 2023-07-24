// task1
// function zero(arr) {
//     arr.sort((a, b) => (a === 0) - (b === 0));
//   }
  

//   const array = [2, 0, 5, 0, 3, 0, 4];
//   console.log(arr)
  
  
//   zero(array);
//   console.log(array); 


// task2

// function firstnorepeatingletter(str) {
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
//         return char;
//       }
//     }
//     return "non";
//   }
  
//   console.log(firstnorepeatingletter('orem ipsum'));
  
// task 3

// function findShortestWordLength(str) {
//     return str.split(" ").reduce((shortest, word) => Math.min(shortest, word.length), Infinity);
//   }
  

//   const sentence = "Hello my name is Samira";
//   const shortestLength = findShortestWordLength(sentence);
//   console.log(shortestLength);
  
// task 4
// function countVowels(str) {
//     const vowels = "aeiou"; 
//     let vowelCount = 0;
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (vowels.includes(char)) {
//         vowelCount++;
//       }
//     }
//     return vowelCount;
//   }
//   const sentence = "helloouu";
//   const numberOfVowels = countVowels(sentence);
//   console.log(numberOfVowels); 

// task 5
// function findCentury(year) {
//     const century = Math.ceil(year / 100);
//     return century;
//   }
  
  
//   const year = 1578;
//   const century = findCentury(year);
//   console.log(century); 
  


  