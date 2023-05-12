import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    "X-Parse-Application-Id": "EzawkWENTpWKatpUZG5uU2nDECx2v718pdMCDfFZ",
    "X-Parse-REST-API-Key": "XITsUwJfbe8my7r8ZjkbPrPeHj2tYNGTSyw8uCyq",
  },
});

export const getTasks = () => instance.get("Task").then((res) => res.data);

export const updateTask = (task) => {
  return instance.put(`/Task/${task.objectId}`, task, {
    headers: { "Content-Type": "application/json" },
  });
};
