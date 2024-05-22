import axios from "axios";


const Base_Url = "https://youtube138.p.rapidapi.com"
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_APP_YOUTUBE_HOST
  }
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${Base_Url}/${url}`, options)
        return data;
    } catch (error) {
        console.log(error);
    }
}