const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

let ulItems = [];

ingredients.forEach(element => {
  let liItem = document.createElement('li');

  liItem.textContent = element;
  liItem.classList.add('item');
  ulItems.push(liItem);

});


list.prepend(...ulItems);

console.log(list)


