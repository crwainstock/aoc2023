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

const engineSchematic = fs.readFileSync("testData.txt", { encoding: "utf-8" });
// const testLines = testData.split("\n");

// console.log(testData);

// PSEUDO-CODE

// Separate data into lines
// Create a sum variable
// Loop over each line, note index of where numbers and symbols are, each line should have its own array within the numberIndex or symbolIndex array
// If a character is a number, keep looking to see if there are numbers that follow (2-4 digit numbers)
// When the whole line has been looped though, create a new array within the numberIndex array for the next line (each line should have their own array)
// For preceeding and subsequent lines, compare location of numbers and symbols (not periods)
// If a number and symbol (in same line, previous line, or subsequent line) have indices within one number of each other (plus or minus one from any number), add the whole number to the sum

// I wasn't able to get my code working, but I found another example (below). Instead of getting my code working,
// I focused on understanding the code below (https://pastecode.io/s/gwa8u3bz)

function solve(content) {
  const data = content.split("\n").map((line) => line.split(""));

  const neighbors = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  const isSymbol = (char) => !!char && char !== "." && !/\d/.test(char);
  const isGear = (char) => char === "*";
  const parts = {};

  rows: for (let r = 0; r < data.length; r++) {
    let cur = "";
    cols: for (let c = 0; c < data[r].length; c++) {
      if (/\d/.test(data[r][c])) {
        cur += data[r][c];
        if (!/\d/.test(data[r][c + 1])) {
          cyphers: for (let k = 0; k < cur.length; k++) {
            neighbors: for (const [dr, dc] of neighbors) {
              const symbol = data[r + dr]?.[c + dc - k];
              if (isSymbol(symbol)) {
                const key = `${symbol},${r + dr},${c + dc - k}`;
                if (!parts[key]) parts[key] = [];
                parts[key].push(+cur);
                break cyphers;
              }
            }
          }
          cur = "";
        }
      }
    }
  }

  const sum = [0, 0];
  for (const key in parts) {
    sum[0] += parts[key].reduce((acc, cur) => acc + cur, 0);
    if (isGear(key[0]) && parts[key].length === 2)
      sum[1] += parts[key].reduce((acc, cur) => acc * cur, 1);
  }
  console.log(sum);
  //   console.log(parts);

  return sum;
}

solve(content);
// // answer is too high...?
