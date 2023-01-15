const KEY = '30787461-ba0c148aaad98f08ab67703d7';

const perPage = 12;

function fetchData(request, page) {
  return fetch(
    `https://pixabay.com/api/?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    return response.json();
  });
}
const api = { fetchData };

export default api;
