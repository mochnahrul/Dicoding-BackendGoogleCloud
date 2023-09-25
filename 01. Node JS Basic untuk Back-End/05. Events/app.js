// const { EventEmitter } = require("events");

// const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };

// myEventEmitter.on("coffee-order", makeCoffee);

// // Memicu event 'coffee-order' terjadi.
// myEventEmitter.emit("coffee-order", { name: "Tubruk" });

// const { EventEmitter } = require("events");

// const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = ({ price }) => {
//   console.log(`Bill sebesar ${price} telah dibuat!`);
// };

// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.on("coffee-order", makeBill);

// myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });
