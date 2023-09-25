const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    return console.log("Gagal membaca berkas");
  }
  console.log(data);
};

fs.readFile("notes.txt", "UTF-8", fileReadCallback);

// Versi Synchronous
// const fs = require("fs");

// const data = fs.readFileSync("todo.txt", "UTF-8");
// console.log(data);

// fs.readFile("notes.txt", "UTF-8", fileReadCallback);
