import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET TEAM
const getTeam = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/team.json?orderBy="uid"&equalTo=${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATE TEAM
const createTeam = () => {};

// DELETE TEAM
const deleteTeam = () => {};

// UPDATE TEAM
const updateTeam = () => {};

export {
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
