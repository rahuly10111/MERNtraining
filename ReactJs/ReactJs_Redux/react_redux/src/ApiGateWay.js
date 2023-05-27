
import axios from "axios";

export const getDataApi = axios.get("https://jsonplaceholder.typicode.com/users");

export const getUserDataApi = axios.get("http://localhost:3030/socialmedia/getuser");