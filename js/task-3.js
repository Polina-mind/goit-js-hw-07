const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesUlRef = document.getElementById('gallery');

//ВАРИАНТ 1

// images.forEach(image => {
//   const imagesItemRef = document.createElement('img');
//   imagesItemRef.setAttribute('src', image.url);
//   imagesItemRef.setAttribute('alt', image.alt);
//   imagesItemRef.setAttribute('width', 750);
//   imagesItemRef.setAttribute('height', 450);

//   const itemRef = document.createElement('li');
//   imagesUlRef.appendChild(itemRef);
//   itemRef.appendChild(imagesItemRef);
// });

//ВАРИАНТ 2

// images.forEach(image => {
//   imagesUlRef.innerHTML += `<li><img src = "${image.url}" alt = "${image.alt}" width="750" height="450"></li>`;
// });

//ВАРИАНТ 3

images.forEach(image => {
  imagesUlRef.insertAdjacentHTML(
    'afterbegin',
    `<li> <img src = "${image.url}" alt = "${image.alt}" width="750" height="450"> </li>`,
  );
});
