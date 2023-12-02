// Day 2: Cube Conundrum

// You play several games and record the information from each game (your puzzle input).
// Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated
//list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

// For example, the record of a few games might look like this:

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

// In game 1, three sets of cubes are revealed from the bag (and then put back again).
// The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes,
// and 6 blue cubes; the third set is only 2 green cubes.

// The Elf would first like to know which games would have been possible if the bag contained only
// 12 red cubes, 13 green cubes, and 14 blue cubes?

// In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded
// with that configuration. However, game 3 would have been impossible because at one point the Elf
//  you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf
// showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible,
// you get 8.

// Determine which games would have been possible if the bag had been loaded with only 12 red cubes,
// 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?

// Get data from day2Data
const fs = require("fs");

// PROCESS THE DATA -- SEPARATE INTO LINES, PUT LINES INTO OBJECT WITH KEY/VALUE PAIRS
const content = fs.readFileSync("day2Data.txt", { encoding: "utf-8" });
const lines = content;

// // Initialize an empty object to store the processed data
// const gamesData = [];

// lines.forEach((line) => {
//   const [gameNumber, gameInfo] = line.split(":");
//   const gameValues = gameInfo
//     .split(";")
//     .map((value) => value.split(",").map((item) => item.trim()));

//   // Store the information in the gamesData array
//   gamesData.push(gameValues);
// });
// console.log(gamesData); // array with arrays and arrays

let data = fs.readFileSync("testData.txt", { encoding: "utf-8" });

let control = { red: 12, green: 13, blue: 14 };
let p1Total = 0;
let p2Total = 0;

lines.split("\n").forEach((line, lineIndex) => {
  let controlLine = { red: 0, green: 0, blue: 0 };
  let isValid = true;
  //   console.log(line);
  line
    .split(":")[1]
    .trim()
    .replaceAll(";", ",")
    .split(",")
    .forEach((cube) => {
      cube = cube.trim();
      //   console.log(cube);
      // Iterate over the object, convert the control into array with color and value
      Object.entries(control).forEach((color) => {
        const colorText = color[0];
        // console.log(colorText);
        const colorLimit = color[1];
        // console.log(colorLimit); // number from the control
        if (cube.includes(colorText)) {
          const value = Number(cube.replace(colorText, "").trim());

          // part 1
          if (value > colorLimit) isValid = false;

          // part 2
          if (value > controlLine[colorText]) controlLine[colorText] = value;
        }
      });
    });

  if (isValid) p1Total += lineIndex + 1;
  //   console.log(lineIndex);

  const totalLine = Object.entries(controlLine).reduce(
    (accumulator, currentValue) => accumulator * currentValue[1],
    1
  );
  p2Total += totalLine;
});

console.log(`Result part 1: ${p1Total} | Result part 2: ${p2Total}`);

// PART 2
// what is the fewest number of cubes of each color that could have been in the bag to make the game possible?
// The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together.
