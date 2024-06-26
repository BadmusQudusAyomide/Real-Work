// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(padRow(i + 1, count));
// }

// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

// const character = "#";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/



// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

// const character = "#";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     character.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

// for (let i = count; i > 0; i -= 1) {
//   rows.push(padRow(i, count));
// }

// let result = "";

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);



const character = "!";
const count = 10;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);