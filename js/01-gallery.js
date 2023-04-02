import { galleryItems } from './gallery-items.js';
// Change code below this line
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
ulEl.insertAdjacentHTML("beforeend", markup)

ulEl.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('gallery__image')){
        return;
    }

    evt.preventDefault()

    const { source } = evt.target.dataset  
    const { alt } = evt.target

    const instance = basicLightbox.create(`
		<img
            width="1400"
            height="900"
            src=${source}
            class = 'gallery__image'
            alt = ${alt}
        >
	`)
    instance.show()

    document.addEventListener('keydown', onKey);
    function onKey(evt) {
        if (evt.code === 'Escape') 
            instance.close();
            document.removeEventListener('keydown', onKey);
        }      
}



       
        
 