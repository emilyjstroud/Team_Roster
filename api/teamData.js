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

// GET SINGLE TEAM
const getSingleTeam = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/team/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE TEAM
const deleteSingleTeam = () => {};

// UPDATE TEAM
const updateTeam = () => {};

const getTeamMembers = () => {};

export {
  getTeam,
  createTeam,
  updateTeam,
  deleteSingleTeam,
  getTeamMembers,
  getSingleTeam,
};
