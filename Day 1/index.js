// Advent of Code 2023 Day 1 -- Trebuchet?!
// https://adventofcode.com/2023/day/

// PART 1

// The newly-improved calibration document consists of lines of text; each line originally contained
// a specific calibration value that the Elves now need to recover.
// On each line, the calibration value can be found by combining the first digit
// and the last digit (in that order) to form a single two-digit number.

// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet

// In this example, the calibration values of these four lines are 12, 38, 15, and 77.
// Adding these together produces 142.

// Consider your entire calibration document. What is the sum of all of the calibration values?

const fs = require("fs");

const content = fs.readFileSync("day1Data.txt", { encoding: "utf-8" });
const lines = content.split("\n");
// console.log(lines);
// console.log(lines.length); //1000

// SAMPLE DATA FROM PROMPT
// let data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
// console.log(data);
// console.log("1abc2".match(/\d+/g).join(""));
// This thread was really useful for getting the Regex set up: https://stackoverflow.com/questions/29000695/looping-through-an-array-of-numbers-and-letters-and-extract-only-the-numbers
// let numbers = [];
// for (let i = 0; i < lines.length; i++) {
//   let value = lines[i].match(/\d+/g).join("");
//   if (value.length === 1) {
//     value += value;
//   }
//   numbers.push(value);
// }
// // console.log(numbers);

// let newValues = [];
// for (let i = 0; i < numbers.length; i++) {
//   let concatenatedValue = "";

//   if (numbers[i].length >= 1) {
//     concatenatedValue = numbers[i][0] + numbers[i][numbers[i].length - 1];
//     newValues.push(Number(concatenatedValue));
//   }
//   //   console.log(newValues);
// }
// let sum = 0;
// newValues.forEach((x) => {
//   sum += x;
// });
// // console.log(sum);

// PART 2

// Your calculation isn't quite right. It looks like some of the digits are actually spelled
// out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

// Equipped with this new information, you now need to find the real first and last digit on each line.
// For example:

// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen

// In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76.
// Adding these together produces 281.

// What is the sum of all of the calibration values?

let data = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

// OMG. This Reddit thread was really helpful for working out the issue with Part 2.
// https://www.reddit.com/r/adventofcode/comments/1884fpl/comment/kbirvjc/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
// It seems like an oversight that this aspect of the calibration wasn't found in the sample data given.
function wordsToDigits(word) {
  const digits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const modifiedWord = digits.reduce(
    (acc, word, index) => acc.replaceAll(word, word + (index + 1) + word),
    word
  );

  // Replace the spelled-out numbers with digits
  const stringWithDigits = modifiedWord.replace(
    new RegExp(digits.join("|"), "gi"),
    (match) => (match.length === 3 ? match[0] : "")
  );

  console.log(stringWithDigits);
  return stringWithDigits;
}

let numbers = [];

for (let i = 0; i < lines.length; i++) {
  const stringWithDigits = wordsToDigits(lines[i]);

  let value = stringWithDigits.match(/\d+/g).join("");

  if (value.length === 1) {
    // If the value has only one digit, concatenate it with itself
    value += value;
  }

  numbers.push(Number(value));
}

console.log(numbers);

let newValues = [];
for (let i = 0; i < numbers.length; i++) {
  let concatenatedValue = "";

  if (numbers[i].toString().length >= 1) {
    concatenatedValue =
      numbers[i].toString()[0] +
      numbers[i].toString()[numbers[i].toString().length - 1];
    newValues.push(Number(concatenatedValue));
  }
  //   console.log(newValues);
}
console.log(newValues);
let sum = 0;

newValues.forEach((x) => {
  sum += x;
});

console.log(sum);
