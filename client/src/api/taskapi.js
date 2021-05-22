import axios from "axios";

const BASE_URL = "http://localhost:5000/task";

export const getTaskInProgress = () => {
  return axios.get(`${BASE_URL}`);
};

export const createTask = (taskInfo) => {
  return axios.post(`${BASE_URL}`, taskInfo);
};

export const taskUpdate = (taskId, taskInfo) => {
  return axios.put(`${BASE_URL}/${taskId}`, taskInfo);
};

export const taskDelete = (taskId) => {
  return axios.delete(`${BASE_URL}/${taskId}`);
};
