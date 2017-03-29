'use strict';
// Создание покемона

class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  show(){
    console.log(this.name);
    console.log(this.level);
  }
}

// Создание списка покемонов

class PokemonList extends Array {
  constructor(...params){
   super(...params);
  }
  add(name, level){
    let elem = new Object;
    elem.name = name;
    elem.level = level;
    this.push(elem);
  }
}

// Экземпляры покемонов

var Pikachu = new Pokemon ('Pikachu', 1);
var Maximus = new Pokemon ('Maximus', 2);

var Oleg = new Pokemon ('Oleg', 11);
var Anton = new Pokemon ('Anton', 12);

// Экземпляры списков

var lost = new PokemonList(Pikachu, Maximus);

var found = new PokemonList(Oleg, Anton);

// Добавим покемонов в списки

lost.add('John', 3);
lost.add('Ben', 4);

found.add('Denis', 13);
found.add('Igor', 14);

// Переместим 'Maximus' из lost в found

let removed = (lost.splice(1, 1)[0]);
found.splice(1, 0, removed);

// Отобразим результат в консоль

// console.log(lost);
// console.log(found);

function getRandomElem (min, max){
  let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
let numbers = [];
for (let i = 0; i < 3; i++){
  let numb = getRandomElem(1, 13);
  numbers.push(numb);
}
// console.log(numbers);

module.exports = found;
