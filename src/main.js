import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { clearGallery, drawGallery } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form.form').addEventListener('submit', event => {
    event.preventDefault();
    const searchText = event.target.querySelector('input').value;
    if (searchText.length == 0) return;
    clearGallery();
    document.querySelector('.loader').style.display = 'block';
    getPhotos(searchText)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.hits.length) {
          drawGallery(data.hits);
        } else {
          iziToastError(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        }
      })
      .catch(error => {
        iziToastError('Error fetching images:', error);
      })
      .finally(() => {
        document.querySelector('.loader').style.display = 'none';
      });
  });
});

function iziToastError(erroMessage) {
  iziToast.error({
    message: erroMessage,
    close: true,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    maxWidth: '432px',
    class: 'custom-iziToast',
  });
}
