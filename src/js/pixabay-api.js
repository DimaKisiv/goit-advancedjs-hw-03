const API_PIXABAY_URL = 'https://pixabay.com/api/';
const API_KEY = '49290147-91bc44204d790a43c13c008af';

export function getPhotos(text) {
  const encodedText = encodeURIComponent(text);
  const apiUrl = `${API_PIXABAY_URL}?key=${API_KEY}&q=${encodedText}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(apiUrl);
}
