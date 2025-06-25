import axios from "axios";

const BASE_URL = "https://quizapi.laspg-online.com";

export const getCategories = () => axios.get(`${BASE_URL}/api/Quiz/categories`);
export const getAllQuestions = () =>
  axios.get(`${BASE_URL}/api/Quiz/questions`);
export const getQuestionById = (id: string) =>
  axios.get(`${BASE_URL}/api/Quiz/questions/${id}`);
export const getQuestionsByCategory = (id: string) =>
  axios.get(`${BASE_URL}/api/Quiz/questions/category/${id}`);
