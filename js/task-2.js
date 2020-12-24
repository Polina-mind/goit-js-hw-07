const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUlRef = document.getElementById('ingredients');

// ВАРИАНТ 1: добавить за 1 операцию это так или вообще без циклов нужно?
// ingredients.forEach(ingredient => {
//   ingredientsUlRef.innerHTML += `<li>${ingredient}</li>`;
// });

// ВАРИАНТ 2
ingredients.forEach(ingredient =>
  ingredientsUlRef.insertAdjacentHTML('afterbegin', `<li>${ingredient}</li>`),
);

// ВАРИАНТ 3
//   ingredients.forEach(ingredient => {
//   let ingredientsItemRef = document.createElement('li');
//   ingredientsItemRef.textContent = ingredient;
//   ingredientsUlRef.appendChild(ingredientsItemRef);
// });
