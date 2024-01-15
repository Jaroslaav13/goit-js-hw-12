import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

// ________________BASE-CONST_____________
const BASE_URL = 'https://pixabay.com/api/';
const options = {
  key: '41496485-2e747cbe724a23cc88d300532',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 40,
};

const refs = {
  searchForm: document.querySelector('.search-form'),
  inputSearch: document.querySelector('.input-name'),
  btnSearch: document.querySelector('.search-btn'),
  gallery: document.querySelector('.gallery'),
  btnLoad: document.querySelector('.load-btn'),
};
// ______________________________________________

const loader = document.createElement('div');
loader.className = 'loader';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = refs.inputSearch.value.trim();

 if (name) {
    refs.gallery.appendChild(loader);
    loader.style.display = 'block';
    fetchImages(name);
  } else {
    displayErrorMessage('Sorry, there are no images matching your search query. Please try again!');
  }
});

function displayErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    backgroundColor: '#EF4040',
  });
}

let name = '';
const fetchImages = async name => {
  options.q = name;

  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: options,
    });

    const data = response.data;

    renderGallery(data.hits);
    console.log(data);

     if (data.hits.length >= options.per_page) {
      refs.btnLoad.style.display = 'block';
    }

    // Виведення повідомлення при досягненні кінця результатів
    if (data.totalHits <= options.per_page * options.page) {
      displayErrorMessage("We're sorry, but you've reached the end of search results.");
    }
    refs.inputSearch.value = '';
  } catch (error) {
    console.log(error);
    displayErrorMessage('API request error');
  } finally {
    loader.remove();
  }
};

function renderGallery(images) {
  const listEl = images
    .map(image => {
      return `<li class="gallery-item">
  <div class="box-cards">
    <a class="gallery-link" href="${image.largeImageURL}">
          <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
         data-likes="${image.likes}"
          data-views="${image.views}"
          data-comments="${image.comments}"
          data-downloads="${image.downloads}"
        />
        <div class="image-info">
        <p class="text-item">Likes: ${image.likes}</p>
        <p class="text-item">Views: ${image.views}</p>
        <p class="text-item">Comments: ${image.comments}</p>
        <p class="text-item">Downloads: ${image.downloads}</p>
      
      </div>
    </a>
    </div>
         </li>`;
    })
    .join('');
  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('afterbegin', listEl);

  const newGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsDataAlt: 'image.tags',
  });
}

// ___кнопка давай еще____

refs.btnLoad.addEventListener('click', onLoadMore);

async function onLoadMore() {
  try {
    options.page++;

    const response = await axios.get(BASE_URL, {
      params: options,
    });

    const data = response.data;

    if (data.hits.length === 0) {
      displayErrorMessage('Sorry, there are no more images.');
      return;
    }

    appendToGallery(data.hits);
    console.log(data);

    if (data.hits.length >= options.per_page && data.totalHits > options.per_page * options.page) {
      refs.btnLoad.style.display = 'block';
    } else {
      refs.btnLoad.style.display = 'none';
       displayErrorMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error(error);
    displayErrorMessage('API request error');
  } finally {
    loader.remove();
  }
}

function appendToGallery(images) {
  const listEl = images
    .map(image => {
      return `<li class="gallery-item">
  <div class="box-cards">
    <a class="gallery-link" href="${image.largeImageURL}">
          <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
         data-likes="${image.likes}"
          data-views="${image.views}"
          data-comments="${image.comments}"
          data-downloads="${image.downloads}"
        />
        <div class="image-info">
        <p class="text-item">Likes: ${image.likes}</p>
        <p class="text-item">Views: ${image.views}</p>
        <p class="text-item">Comments: ${image.comments}</p>
        <p class="text-item">Downloads: ${image.downloads}</p>
      
      </div>
    </a>
    </div>
         </li>`;
    })
    .join('');

 
  refs.gallery.insertAdjacentHTML('beforeend', listEl);

  
  const newGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsDataAlt: 'image.tags',
  });
}
