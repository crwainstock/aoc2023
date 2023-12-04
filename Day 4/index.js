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
// FULL DATA
const content = fs.readFileSync("day4Data.txt", { encoding: "utf-8" });
const processedContent = content.split("\n").map((line, index) => {
  const [firstSet, secondSet] = line
    .replace(/^Card\s*\d+:\s*|\r$/g, "")
    .split(/\s*\|\s*/);

  if (secondSet === undefined) {
    console.log(`Invalid line format at line ${index + 1}:`, line);
    return null; // or handle as needed
  }

  return [
    firstSet.split(/\s+/).filter(Boolean),
    secondSet.split(/\s+/).filter(Boolean),
  ];
});

const validProcessedContent = processedContent.filter(Boolean);

// console.log(validProcessedContent);

// const processedContent = content.split("\n").map((line) => {
//   const [firstSet, secondSet] = line
//     .replace(/^Card \d+:|\r$/g, "")
//     .split(/\s*\|\s*/);
//   return [
//     firstSet.split(/\s+/).filter(Boolean),
//     secondSet.split(/\s+/).filter(Boolean),
//   ];
// });
// console.log(processedContent);

// TEST DATA
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

// console.log(processedTestData);
// FUNCTION TO FIND MATCHES IN ARRAYS OF NUMBERS
let matches = [];
const findMatches = (validProcessedContent) => {
  for (let i = 0; i < validProcessedContent.length; i++) {
    const [firstSet, secondSet] = validProcessedContent[i];
    const commonNumbers = [];
    for (const num of firstSet) {
      if (secondSet.includes(num)) {
        commonNumbers.push(num);
      }
    }
    if (commonNumbers.length > 0) {
      matches.push(commonNumbers);
    }
  }
  console.log(matches);
  //   console.log(matches.length);
  return matches;
};

const findCardValue = (matches) => {
  let cardValue = 0;

  //Loop through matches array of arrays
  for (let i = 0; i < matches.length; i++) {
    // How many values are in each array
    let doubles = matches[i].length;
    // console.log(doubles); // 4, 2, 2, 1 -- expected

    // Uses function to double value based on length of each array
    cardValue += 1 * Math.pow(2, doubles - 1);

    console.log(`Card ${i + 1} points: ${cardValue}`);
  }
  console.log(`Total Card Value: ${cardValue}`);
  return cardValue;
};

findMatches(processedContent);
findCardValue(matches);
