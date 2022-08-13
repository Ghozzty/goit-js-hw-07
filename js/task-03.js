const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery = document.querySelector('.gallery');

  
const galleryItems = images
.map(({url, alt}) => `<li><img src='${url}' alt='${alt}' width=300 /></li>`
)
.join('');
;

ulGallery.insertAdjacentHTML('afterbegin', galleryItems);

ulGallery.style.listStyle = 'none';
ulGallery.style.display = 'flex';
ulGallery.style.gap = '50px';

console.log(galleryItems);
console.log(ulGallery);

// console.log(ulGallery)