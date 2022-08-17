import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// ___rendering html

const galleryWrapper = document.querySelector(".gallery");

const createItems = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
  )
  .join("");

galleryWrapper.insertAdjacentHTML("afterbegin", createItems);

// _______getting current image

galleryWrapper.addEventListener("click", clickOnWrapper);

function clickOnWrapper(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const currentUrl = e.target.dataset.source;
  console.log(currentUrl);

  //   ______using cuurentUrl in library

  const modalImg = basicLightbox.create(`
    <img src="${currentUrl}">
`);
  modalImg.show();

  // ___add close on escape

  galleryWrapper.addEventListener("keydown", clickOnEsc, { once: true });

  function clickOnEsc(e) {
    if (e.code === "Escape") {
      modalImg.close();
    }
  }
}
