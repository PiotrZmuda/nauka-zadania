// 3. Napisz funkcję strzałkową, która będzie zwracać połowę wartości wprowadzonej jako argument. Np. argument = 4, funkcja zwraca 2. 


// const half = number =>{
//     const result = number / 2
//     return result
// }

// const result = half(10)
// console.log(result)


// 4. Napisz funkcję strzałkową, która przyjmować będzie jeden argument (liczbę). 
// Następnie sprawdź czy liczba jest dodatnia, ujemna, czy równa 0 i zwróć odpowiednią wiadomość do użytkownika w konsoli. 

// const number = liczba =>{
//     if(liczba > 0){
//         return `Liczba ${liczba} jest dodatnia`
//     }else if ( liczba < 0){
//         return `Liczba ${liczba} jest ujemna`
//     }else{
//        return `${liczba} jest równe 0`
//     }
// }
// const result = number(0)
// console.log(number(1))

// 5. Napisz funkcję strzałkową, która przyjmować będzie trzy argumenty liczbowe (całkowite). 
// Sprawdź czy w każdej z tych liczb ostatnia cyfra jest taka sama, np. 7,17,77 i zwróć odpowiednią informację. 
// Jeżeli w przynajmniej jednym przypadku cyfra będzie się różnić, to warunek nie zostaje spełniony - również zwracamy informację. 

// const arr = [7,17,77]

// const numbers = num =>{
//     for(const key of arr){
//         if(key.includes(num)){
//             return `W każdej liczbie z tych liczb jest taka sama cyfra ${num}`
//         } else {
//            return `Wszystkie liczby nie zawieraj wspólne ostatniej cyfry `
//         }
//     }
// }
// const result = numbers(7)
// console.log(result)


// const numbers = [7,17,77]

// function checkTheNumber( arr, num){
//     for(const key of numbers){
//         if(checkTheNumber.includes(num)){
//             return `litera ${num} występuję`
//         } else{
//            return `brak litery ${num}`
//         }
//     }
// }
// console.log(checkTheNumber(numbers, 7))


// 7. Utwórz funckję strzałkową, która jako argument przyjmię tablicę z kilkoma obiektami. 
// Niech każdy z obiektów opisuje Twojego znajomego : jak ma na imię, jaki jest jego wiek, jaki zawód wykonuje. 
// Następnie za pomocą pętli wywołanej w funkcji postaraj się wyświetlić informacje o każdym z przyjaciół, np. 
// “Mój przyjaciel (imię przyjaciela) to z zawodu (zawód przyjaciela) i ma (wiek przyjaciela) lat”. 

// const friendsList = [
//     {
//         name: "Mateusz",
//         age: 30,
//         profession: 'worker'
//     },
//     {
//         name: "Paweł",
//         age: 35,
//         profession: 'driver'
//     },
//     {
//         name: "Rafał",
//         age: 38,
//         profession: 'seller'
//     }
// ]

// const aboutMyFriend = friendsList =>{
//     for( const key in friendsList){
//         return ` Mój przyjaciel ${friendsList.name} to z zawodu ${friendsList.profession} i ma ${friendsList.age} lat.`
//     }
// }
// console.log(aboutMyFriend(friendsList[1]))


// 8. Napisz funkcję strzałkową, która będzie usuwać wybrany element z tablicy. 
// Załóżmy, że przekazujemy do funkcji tablicę [1,2,3] oraz jako drugi argument liczbę 2. 
// W rezultacie powinniśmy otrzymać tablicę [1,3]. 

// const radomNumbers = [1,2,3,4,5]

// const numbers = num1 =>{
//    const result =  radomNumbers.splice((num1 - 1),1)
//    return result
// }
//  const result = numbers(4)
//  console.log(radomNumbers)



// 9. Napisz funkcję strzałkową, która będzie dodawać element do tablicy w zadeklarowanym miejscu. 
// Na przykład, mając tablicę z wartościami [3,4,5,6,7] chcesz dodać liczbę 1 na miejsce o indeksie 2. 
// Funkcja strzałkowa - arrow function 6

// const radomNumbers = [3,4,5,6,7]

// const numbers = pushNum =>{
//    const result = radomNumbers.splice(1,0,pushNum)
//    return result
// }
// const result = numbers(1)
// console.log(radomNumbers)

// 10. Napisz funkcję strzałkową, która będzie zwracać jedynie string “Hello”. 
// Następnie utwórz kolejną funkcję, która przyjmie tę pierwszą jako argument a dodatkowo kolejnym jej argumentem będzie imię osoby. 
// Postaraj się wywołać funkcję w funkcji, aby otrzymać na koniec w kosoli wiadomość “Hello (imię osoby)”.


// const arrFunction = hi => hi

// const arr2 = (hi, name) => hi + name 
// console.log(arr2("Hello ", "Piotr"))