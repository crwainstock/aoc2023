// Advent of Code 2023 Day 1 -- Trebuchet?!
// https://adventofcode.com/2023/day/

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
const filePath = "day1Data.txt";

const content = fs.readFileSync("day1Data.txt", { encoding: "utf-8" });
const lines = content.split("\n");
// console.log(lines);
// console.log(lines.length); //1000
let numbers = [];
let values = [];
let valuesSum = 0;

// Loop through each line of text/numbers
// If the character is a number, push it to the numbers array
// Grab the first and last numbers from the numbers array and put them in a new array in values
// Once all lines have been looped through, add all numbers in values array together and put in valuesSum variable

for (let i = 0; i < lines.length; i++) {
  const character = lines[i];

  if (!isNaN(character)) {
    console.log("Numeric character found:", character);
  }
}
