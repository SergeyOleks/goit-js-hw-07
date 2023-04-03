import { galleryItems } from './gallery-items.js';

const ulEl = document.querySelector('.gallery');

// Загрузка файлов предпросмотра
const markup = galleryItems.map(({ preview: url, description: alt,  original: urlLarge}) =>
    `<li class="gallery__item" >
        <a class="gallery__link"
            href = ${urlLarge} 
        >   
            <img
                class="gallery__image"
                src=${url} 
                data-source=${urlLarge} 
                alt=${alt}
            />
        </a>
    </li>`).join('')

ulEl.insertAdjacentHTML("beforeend", markup); 
    let gallerySimLight = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });

gallerySimLight.on('show.simplelightbox');


