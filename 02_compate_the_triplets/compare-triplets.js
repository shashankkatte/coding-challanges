'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  const { A, B } = a.reduce(
    (acc, cur) => {
      const { counter } = acc;
      if (a[counter] > b[counter]) {
        acc.A++;
      } else if (a[counter] < b[counter]) {
        acc.B++;
      }
      acc.counter++;
      return acc;
    },
    { A: 0, B: 0, counter: 0 }
  );
  return [A, B];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((bTemp) => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
