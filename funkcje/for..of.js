// const people = [
//   {
//     name: "Andrzej",
//     age: 19,
//   },
//   {
//     name: "Jasiek",
//     age: 16,
//   },
// ];

// function bar(clientDetails, barmanOnBreak) {
//   if (barmanOnBreak === true) {
//     return `The bar is closed. The barman's on break`;
//   }
//   for (const key of Array(clientDetails)) {
//     if (key.age >= 18) {
//       return `"spokojnie ${key.name} barman cię zaraz obsłuży"`;
//     } else {
//       return `"${key.name}, uciekaj do domu, bo matce powiem!"`;
//     }
//   }
// }
// console.log(bar(people[1], false)

// 2. Używając poniższego obiektu za pomocą pętli for...of i logiki postaraj się zwrócić
// informację dla użytkownika czy oglądał dany film czy nie.
// W przypadku kiedy dany film został już obejrzany w konsoli powinna pojawić się
// informacja: 
// np. "Already watched 'The Hobbit: An Unexpected Journey' by Peter Jackson." a
// gdy pozostaje do obejrzenia: "You still need to watch 'The Batman' by Matt
// Reeves.".

const films = [
    {
    title: 'The Hobbit: An Unexpected Journey',
    director:'Peter Jackson',
    watched: true,
    },
    {
    title: 'THOR: RAGNAROK',
    director:'Taika Waititi',
    watched: true,
    },
    {
    title: 'The Batman',
    director:'Matt Reeves',
    watched: false,
    },
    ]

    function watchVideo(video){
        for( const key of Array(video)){
            if(key.watched === true){
                return `"Already watched ${key.title}, ${key.director}"`
            } else{
                return `"You still need to watch ${key.title}, ${key.director}"`
            }
        }
    }
    console.log(watchVideo(films[2]))
