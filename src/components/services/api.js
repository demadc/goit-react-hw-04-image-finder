const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38277598-05a082c915074d2caf7c5aa6f';

export const getGallery = value => {
  return fetch(`${BASE_URL}?key=${API_KEY}`);
};
