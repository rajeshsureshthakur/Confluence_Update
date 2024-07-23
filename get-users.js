var axios = require('axios');
require('dotenv').config();

const username = "rajeshsureshthakur@gmail.com"
const password = "asdf123"
const domain = "https://rajeshsureshthakur.atlassian.net/jira"

const auth = {
  username: username,
  password: password
};

//Gets all users within a project using Jira Cloud REST API
async function getUsers() {

  try {

    const baseUrl = domain;

    const config = {
      method: 'get',
      url: baseUrl + '/rest/api/2/users',
      headers: { 'Content-Type': 'application/json' },
      auth: auth
    };
    const response = await axios.request(config);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log('error: ')
    console.log(error.response.data.errors)
  }
}

module.exports = getUsers;