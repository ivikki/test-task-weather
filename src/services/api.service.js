// outsource dependencies
import axios from "axios";

const openWeatherApiKey = "c792484ade42380886f51003cfcaf04d";

const instanceAPI = axios.create({
  baseURL: "https://api.openweathermap.org"
});

export { instanceAPI, openWeatherApiKey };
