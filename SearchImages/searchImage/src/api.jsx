import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5QopCuNUhnbS6HQhFDaZ7IGXB7L3SNIuHQ67QgPkzYs",
    },
    params: {
      query: term,
      per_page: 100,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
