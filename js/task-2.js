const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUlRef = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.textContent = ingredient;
  ingredientsUlRef.appendChild(ingredientsItemRef);
});

// console.log(ingredientsUl);
