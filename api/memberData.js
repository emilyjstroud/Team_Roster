import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL MEMBERS
const getMembers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/members.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATE MEMBER
const createMember = (memberObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/members.json`, memberObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/members/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// DELETE MEMBER
const deleteMember = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/members/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

// UPDATE MEMBER
const updateMember = (memberObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/members/${memberObj.firebaseKey}.json`, memberObj)
    .then(resolve)
    .catch(reject);
});

// GET A SINGLE MEMBER
const getSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/members/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getMembers,
  createMember,
  deleteMember,
  updateMember,
  getSingleMember,
};
