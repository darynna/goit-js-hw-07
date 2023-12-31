import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");
galleryItems.map(item => {
    const markUp = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
    gallery.insertAdjacentHTML("beforeend", markUp)
});

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' ,captionPosition: 'bottom', captionDelay: 250 });


