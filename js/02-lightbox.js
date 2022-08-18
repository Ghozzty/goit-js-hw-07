import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// ___rendering html

const galleryWrapper = document.querySelector(".gallery");

const createItems = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`
  )
  .join("");

galleryWrapper.insertAdjacentHTML("afterbegin", createItems);

// ____initialization and using library

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionClass: "captions",
  showCounter: false,
});
