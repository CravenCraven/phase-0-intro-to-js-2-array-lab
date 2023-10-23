const cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
    const newCats = cats.slice(); 
    newCats.push(name); 
    return newCats;
  }
  
  function prependCat(name) {
    const newCats = cats.slice();
    newCats.unshift(name);
    return newCats;
  }
  function removeLastCat() {
    const newCats = cats.slice(); 
    newCats.pop(); 
    return newCats;
  }
  function removeFirstCat() {
    const newCats = cats.slice(); 
    newCats.shift();
    return newCats; 
  }
  function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  const newCats1 = appendCat("Whiskers");
const newCats2 = prependCat("Socks");
const newCats3 = removeLastCat();
const newCats4 = removeFirstCat();

console.log("Original cats array:", cats);
console.log("After appending:", newCats1);
console.log("After prepending:", newCats2);
console.log("After removing last cat:", newCats3);
console.log("After removing first cat:", newCats4);
