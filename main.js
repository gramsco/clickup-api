require("dotenv").config();
const axios = require("axios");
const token = process.env.CLICKUP_TOKEN;
const TASKS_LIST = process.env.LIST_ID;

const clickupV2 = axios.create({
  baseURL: "https://api.clickup.com/api/v2",
  headers: {
    authorization: `${token}`,
  },
});

const taskTest = {
  name: "New Task Name",
  description: "New Task Description",
  /*
  whatever you need, see: 
    https://clickup20.docs.apiary.io/#reference/0/guests/create-list
  */
};

clickupV2
  .post(`/list/${TASKS_LIST}/task`, taskTest)
  .then(console.log)
  .catch(console.log);
