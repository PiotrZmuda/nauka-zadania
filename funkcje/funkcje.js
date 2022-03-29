const people = [
  {
    name: "Andrzej",
    age: 19,
  },
  {
    name: "Jasiek",
    age: 16,
  },
];

function bar(clientDetails, barmanOnBreak) {
  if (barmanOnBreak === true) {
    return `The bar is closed. The barman's on break`;
  }
  for (const key of Array(clientDetails)) {
    if (key.age >= 18) {
      return `"spokojnie ${key.name} barman cię zaraz obsłuży"`;
    } else {
      return `"${key.name}, uciekaj do domu, bo matce powiem!"`;
    }
  }
}
console.log(bar(people[1], false));
