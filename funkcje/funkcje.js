// 1. Napisz funkcję o nazwie sum, która będzie przyjmować dwa argumenty i zwracać ich sumę.
// Wywołaj funkcję i sprawdź czy działa poprawnie.

// function sum( x, y ){
//     return x * y
// }
// const result = sum(2,2)
// console.log(result)

// 2** Zadeklaruj tablicę z czterema imionami. Następnie napisz funkcję, która jako argument będzie
// przyjmować tę tablicę oraz drugi argument - literę. Następnie sprawdź czy dana litera występuje w
// każdym z elementów tablicy i zwróć informację na ten temat w konsoli. Sprawdź czy na wynik ma
// wpływ wielkość szukanej litery. Zapoznaj się z dokumentacją:

// const names = [
//     'Piotr',
//     'Paweł',
//     'Mateusz',
//     'Ola',
// ]
// function checkTheLetter( arr, letter){
//     for(const key of names){
//         if(key.toLowerCase().includes(letter.toLowerCase())){
//             return `litera ${letter} występuję`
//         } else{
//            return `brak litery ${letter}`
//         }
//     }
// }
// console.log(checkTheLetter(names, 'o'))


// 6. Napisz funkcję, która przyjmuje jako parametr tablicę i nowy element do tablicy. Funkcja ta powinna
// przeiterować tablicę sprawdzając czy już taki element w niej jest. W przypadku jeśli go nie ma, to
// powinna dodać go do tablicy, a jeżeli już tam się znajduje, to wyświetlić odpowiedni komunikat.

// const arr = ['a','b','c','d','e']
// const emptyArr = []

// function newElement(arr, element){
//     for(const key of arr){
//         if(key.includes(element)){
//             return `element ${element} is in the array`
//         } else{
//             arr.push(element)
//         }
//     }
// }
// console.log(newElement(arr, 'a'))


// 6. Napisz funkcję, która przyjmuje jako parametr tablicę i nowy element do tablicy. 
// Funkcja ta powinna przeiterować tablicę sprawdzając czy już taki element w niej jest. 
// W przypadku jeśli go nie ma, to powinna dodać go do tablicy, a jeżeli już tam się znajduje, to wyświetlić odpowiedni komunikat. 

