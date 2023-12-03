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

// Get data from day3Data
const fs = require("fs");

// PROCESS THE DATA -- SEPARATE INTO LINES, PUT LINES INTO OBJECT WITH KEY/VALUE PAIRS
const content = fs.readFileSync("day3Data.txt", { encoding: "utf-8" });
