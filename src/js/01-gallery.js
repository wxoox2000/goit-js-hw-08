// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});



// console.log(galleryItems);
