// DAY 6 -- Wait For It
// https://adventofcode.com/2023/day/6

// As part of signing up, you get a sheet of paper (your puzzle input) that lists the time
// allowed for each race and also the best distance ever recorded in that race.
// To guarantee you win the grand prize, you need to make sure you go farther in each race than
// the current record holder.

// The boats are much smaller than you expected - they're actually toy boats, each with a big button
// on top. Holding down the button charges the boat, and releasing the button allows the boat to move.
// Boats move faster if their button was held longer, but time spent holding the button counts against
// the total race time. You can only hold the button at the start of the race, and boats don't move until
// the button is released.

// For example:

// Time:      7  15   30
// Distance:  9  40  200

// This document describes three races:

// The first race lasts 7 milliseconds. The record distance in this race is 9 millimeters.
// The second race lasts 15 milliseconds. The record distance in this race is 40 millimeters.
// The third race lasts 30 milliseconds. The record distance in this race is 200 millimeters.

// Your toy boat has a starting speed of zero millimeters per millisecond.
// For each whole millisecond you spend at the beginning of the race holding down the
// button, the boat's speed increases by one millimeter per millisecond.

// Part 2:

// Time: 71530;
// Distance: 940200;

const fs = require("fs");
const content = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .toString()
  .replace(/(\r)/gm, "");
let lines = content.split("\n");

// console.log(lines);

const testContent = fs
  .readFileSync("testData.txt", { encoding: "utf-8" })
  .toString()
  .replace(/(\r)/gm, "");
let testLines = testContent.split("\n");

const part1 = () => {
  let total = 1;

  let times = [];
  let distances = [];

  let match;
  // d = digit, + matches 1 or more instances of digits, g = global, compares whole string
  let pattern = /\d+/g;

  //Creating arrays with time and distance data (only numbers)
  while ((match = pattern.exec(lines[0])) !== null) {
    times.push(parseInt(match[0]));
  }
  while ((match = pattern.exec(lines[1])) !== null) {
    distances.push(parseInt(match[0]));
  }

  //Loop through array of times, add ways to win to variable
  for (let i = 0; i < times.length; i++) {
    let waysToWin = 0;
    for (let buttonLength = 0; buttonLength < times[i]; buttonLength++) {
      //time that we have left * button length > distance traveled
      if ((times[i] - buttonLength) * buttonLength > distances[i]) {
        waysToWin++;
      }
    }
    // multiply the number of ways to win to getn the margin of error
    total *= waysToWin;
  }
  return total;
};

const part2 = () => {
  let times = [];
  let distances = [];

  let match;
  // d = digit, + matches 1 or more instances of digits, g = global, compares whole string
  let pattern = /\d+/g;

  //Creating arrays with time and distance data (only numbers)
  while ((match = pattern.exec(lines[0])) !== null) {
    times.push(match[0]);
  }
  while ((match = pattern.exec(lines[1])) !== null) {
    distances.push(match[0]);
  }

  let time = parseInt(times.join(``));
  let distance = parseInt(distances.join(``));

  let waysToWin = 0;
  for (let buttonLength = 0; buttonLength < time; buttonLength++) {
    //time that we have left * button length > distance traveled
    if ((time - buttonLength) * buttonLength > distance) {
      waysToWin++;
    }
  }
  // There's only one race, so you don't need to multiply the values, just add all the ways to win
  return waysToWin;
};

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);
