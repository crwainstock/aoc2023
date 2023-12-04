// Day 4: Scratchcards

// The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards,
// all with their opaque covering already scratched off. Picking one up, it looks like each card has two
// lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers
// you have. You organize the information into a table (your puzzle input).

// As far as the Elf has been able to figure out, you have to figure out which of the numbers you have
// appear in the list of winning numbers. The first match makes the card worth one point and each match
// after the first doubles the point value of that card.

// 1. Process the data -- each line, separate by vertical line |, convert into numbers (2 arrays of numbers)
// 2. Initialize array of matches (numbers found in both winning numbers and your numbers)
// 3. Loop through numbers, compare both arrays, if the same number occurs in each array, add it to the array of matches
// 4. Use the length of the array of matches to determine the number of points -- double each time

const fs = require("fs");
const content = fs.readFileSync("day4Data.txt", { encoding: "utf-8" });

const testData = fs.readFileSync("testData.txt", { encoding: "utf-8" });
const processedTestData = testData.split("\n").map((line) => {
  const [firstSet, secondSet] = line
    .replace(/^Card \d+:|\r$/g, "")
    .split(/\s*\|\s*/);
  return [
    firstSet.split(/\s+/).filter(Boolean),
    secondSet.split(/\s+/).filter(Boolean),
  ];
});

console.log(processedTestData);
