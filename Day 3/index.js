// DAY 3 -- Gear Ratios

// The engineer explains that an engine part seems to be missing from the engine, but nobody can
// figure out which one. If you can add up all the part numbers in the engine schematic,
// it should be easy to work out which part is missing.

// The engine schematic (your puzzle input) consists of a visual representation of the engine.
// There are lots of numbers and symbols you don't really understand, but apparently any number
// adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum.
// (Periods (.) do not count as a symbol.)

// 💡 Any number adjacent to symbol is a part number (even diagonally)
// 💡 Periods are not symbols
// 💡 Need the sum of the part numbers

const fs = require("fs");
const content = fs.readFileSync("day3Data.txt", { encoding: "utf-8" });
const lines = content.split("\n");
const testData = fs.readFileSync("testData.txt", { encoding: "utf-8" });
const testLines = testData.split("\n");

console.log(testData);

// PSEUDO-CODE

// Separate data into lines
// Create a sum variable
// Loop over each line, note index of where numbers and symbols are, each line should have its own array within the numberIndex or symbolIndex array
// If a character is a number, keep looking to see if there are numbers that follow (2-4 digit numbers)
// Add whole number (however long it is) to the numberIndex array
// When the whole line has been looped though, create a new array within the numberIndex array for the next line (each line should have their own array)
// For preceeding and subsequent lines, compare location of numbers and symbols (not periods)
// If index of number is next to symbol (in same line, preceeding, or subsequent lines), add it to the sum

let sum = 0;
let numberIndex = [];
let symbolIndex = [];

for (let i = 0; i <= testLines.length; i++) {}
