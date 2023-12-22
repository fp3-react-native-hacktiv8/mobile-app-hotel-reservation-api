import axios from "axios";

const API_KEY = "becef8d4acmsh3ffa8e8c9d1a809p18986ejsn0585269cc8de";

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
