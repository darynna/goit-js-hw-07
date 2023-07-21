import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.map(item => {
    const markUp = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`
    gallery.insertAdjacentHTML("beforeend", markUp)
});


gallery.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }

    const imageURL = e.target.dataset.source;
    const imageAlt = e.target.alt;
    
    const instance = basicLightbox.create(`
    <img src="${imageURL}" alt="${imageAlt}" width="800" height="600">`)

    instance.show();

    const closeLightboxOnEscape = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };

    document.addEventListener("keydown", closeLightboxOnEscape);

    
}); 








