//Unveiling the Coordinates;
const coordinates = { x: 34, y: 42, z: 67 };
const { x, y } = coordinates;
//console.log(x, y);

//The Map of Secrets;
const locations = {
  first: "Cave of Wonders",
  second: "Lake of Mystery",
  third: "Mount of Ages",
  fourth: "Desert of Shadows"
};

let { first, second, ...remaining } = locations;
//console.log(first, second);

//The Mysterious Door;
const doorCode = {
  upper: "Alpha",
  lower: "Omega"
};

const { upper, middle = remaining.third, lower } = doorCode;

//console.log(upper, middle, lower);

//The Guardian's Riddle;
const riddle = {
  ancientWord: "Sphinx",
  modernWord: "Cat"
};

const { ancientWord: translation } = riddle;
console.log(`The guardian says: ${translation}`);

//The Array of Elements;
const elements = ["Fire", "Water", "Earth", "Air"];
const [firstElement, secondElement] = elements;

//console.log(firstElement, secondElement);

//Skipping Stones;
const stones = [1, 2, 3, 4, 5, 6];
const [firstStone, , , , , sixthStone] = stones;

//console.log(firstStone, sixthStone);

//The Array of Shadows;
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visibleShadows, ...hiddenShadows] = shadows;

//console.log(visibleShadows,...hiddenShadows);

//The Wise Function:
const revealPath = ({ direction, distance }) => {
  console.log(`Move ${distance} meters towards ${direction}.`);
};

//revealPath({direction: "North", distance: 100});

//Potion of Clarity:
const mixPotion = ({
  ingredient1 = "Water",
  ingredient2 = "FireFlower"
} = {}) => {
  console.log(`Mixing ${ingredient1} and ${ingredient2}`);
};

mixPotion({ ingredient1: "Lavender" });

//The Array Spell;
const castSpell = ([ingredient1, ingredient2]) => {
  console.log(`Casting a spell with ${ingredient1} and ${ingredient2}`);
};

castSpell(["Moonstone", "Unicorn Horn", "Sunflower"]);

//The Nested Secret;
const nestedSecret = { outer: { inner: "The Final Key" } };
const {
  outer: { inner: finalKey }
} = nestedSecret;

console.log(finalKey);

//The Swap of Fate;
let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneA, stoneB] = [stoneB, stoneA];

console.log(stoneA, stoneB);
