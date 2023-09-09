const API_KEY = '38277598-05a082c915074d2caf7c5aa6f';
const BASE_URL = 'https://pixabay.com/api/';

export const getGallery = async (value, page = 1) => {
  return await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${value}&page=${page}&image_type=photo&per_page=12`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json();
  });
};
