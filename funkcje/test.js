// 1. Utwórz zmienną, do której będzie przypisana tablica [5,10,15] a następnie za
// pomocą metody map() utwórz nową tablicę, której rezultatem będzie [10,15,20].
// Wyświetl w consoli tablicę.

// const array = [1, 2, 3, 4, 5]
// const newArray = array.map(function(item) {
// return item * 2
// })
// console.log('array', array) // Wynik to "array", [1, 2, 3, 4, 5]
// console.log('newArray', newArray) // Wynik to "newArray", [2, 4, 6, 8, 10]

const array = [5,10,15]
const newArray = array.map(function(item){
   return item + 5
})

console.log(newArray)