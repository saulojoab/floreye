import axios from "axios";

const api = axios.create({
  baseURL: "https://my-api.plantnet.org/", // Replace with your API base URL
  headers: { "Content-Type": "application/json" },
  params: {
    "api-key": process.env.EXPO_PUBLIC_API_KEY, // Replace with your actual API key
  },
});

export default api;
