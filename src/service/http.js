import axios from "axios";

const API_KEY = "a0f2b51667msh1c0832f8f0f0e6fp103d44jsneac60a7be039";

const baseUrl = process.env.REACT_APP_BASE_API_URL;

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  },
});

const parseResponse = (response) => {
  return {
    data: response.data,
  };
};

http.interceptors.response.use(
  (response) => {
    return parseResponse(response);
  },
  (error) => {
    console.log("API EXPIRED");
  }
);

export default http;
