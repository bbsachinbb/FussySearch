import axios from "axios";
const baseUrl = "http://www.mocky.io/";

export const mockeyApi = axios.create({
  baseUrl: baseUrl,
});
