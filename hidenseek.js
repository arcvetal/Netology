'use strict';

const found = require('./Pokemons');
const fs = require('fs');
const opts = { encoding: 'utf8'};

// Ф-я возвращает случайное целое число в диапазоне от min до max
function getRandomElem (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

// function hide (track, list) {
//
// // Ф-я возвращает случайное количество случайных покемонов из переданого списка (но не более 3 и не более чем передано)
//   function getRandomUniqList (list) {
//     let numbers = [];
//     var uniqNumbers;
//     var randomlist =[];
//     var elemCount;
//
//     if(list.length >= 3) {
//       elemCount = 3;
//     } else {
//       elemCount = list.length;
//     }
//
//     for (let i = 0; i < elemCount; i++) {
//       let numb = getRandomElem(1, list.length - 1);
//       numbers.push(numb);
//     }
//
//     uniqNumbers = Array.from(new Set(numbers));
//
//     for (let k = 0; k < uniqNumbers.length; k++) {
//       randomlist.push(list[uniqNumbers[k]]);
//     }
//
//     return randomlist;
//   }
//
//   var randomPokemonsArr = getRandomUniqList(list);
//
// // Ф-я возвращает массив с уникальными эл-тами длинной равной количеству случайных покемонов
//   function uniqList(arr){
//     var testObj = {};
//     var uniqueArr = [];
//
//     for (let i = 0; uniqueArr.length < arr.length; i++) {
//       let numb = getRandomElem(1, 10);
//       if(!testObj.hasOwnProperty(numb)){
//         testObj[numb] = "Hello";
//         uniqueArr.push(numb);
//       }
//     }
//     return uniqueArr;
//   }
//
//   var randomFolders = uniqList(randomPokemonsArr);
//
// // Ф-я создает 10 папок с именами 01, 02 и т.д. и в некоторых создает файл
//   function createFolders(callback){
//     for (let i = 1; i < 11; i++){
//       let name = track + '/0';
//       fs.mkdir(name + i, err => {
//        if (err) throw err;
//        console.log('Папка создана');
//
//        callback();
//       })
//     }
//   }
//
// // Ф-я создает файлы с покемонами в случайных папках
//   function createTxtFiles(){
//     for (let i = 0; i < randomFolders.length; i++){
//       let name = track + '/0';
//       fs.writeFile(name + randomFolders[i] + '/pokemon.txt', randomPokemonsArr[i].name + '|' + randomPokemonsArr[i].level , opts, err => {
//         if (err) throw err;
//         console.log('Файл создан');
//       })
//     }
//   }
//
//   createFolders(createTxtFiles);
//
// // Отоюразим спрятаных покемонов
//   console.log(randomPokemonsArr);
// }
//
// hide ('./field', found);


var findPokemons = [];

function seek(track) {

  for (let i = 1; i < 11; i++){
    fs.readFile(track + '/0' + i + '/pokemon.txt', opts, (err, content) => {
      if (err) return console.error(err);
      findPokemons.push(content);
      // console.log(findPokemons);
    })
  }

  // return findPokemons;
  console.log(findPokemons);
}


seek('./field');


// seek('./field');
