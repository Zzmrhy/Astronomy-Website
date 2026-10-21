const API_KEY = import.meta.env.NASA_API_KEY;

export const getPictureOfTheDay = async () => {
  const response = await fetch(
    `https://science.nasa.gov/wp-json/wp/v2/apod-basic?api_key=${API_KEY}`
    // &date=${day}
  );
  const data = await response.json();
  console.log(data);
  return data;
};