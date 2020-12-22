const liItemsRef = document.querySelectorAll('.item');
console.log(`В списке ${liItemsRef.length} категории`);

const titleItemsRef = document.querySelectorAll('h2');
const titleItems = titleItemsRef.forEach(title =>
  console.log(
    `Категория: ${title.textContent}. Количество элементов: ${title.nextElementSibling.children.length}`,
  ),
);
