import axios from 'axios';

const fetchImg = async (userQuery, page) => {
  const params = {
    page,
    q: userQuery,
    key: '33863715-df25260fa40bd11fad8b98be3',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  try {
    const response = await axios.get('https://pixabay.com/api/', { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
export default fetchImg;
