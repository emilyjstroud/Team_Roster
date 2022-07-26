import { deleteMember, getSingleMember } from './memberData';
import { getTeamMembers, getSingleTeam, deleteSingleTeam } from './teamData';

const viewMemberDetails = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey)
    .then((memberObj) => {
      getSingleMember(memberObj.teamId)
        .then((teamObj) => {
          resolve({ teamObj, ...memberObj });
        });
    }).catch((error) => reject(error));
});

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamMembers(teamFirebaseKey)])
    .then(([teamObj, teamMemberArray]) => {
      resolve({ ...teamObj, members: teamMemberArray });
    }).catch((error) => reject(error));
});

const deleteTeamMembers = (teamId) => new Promise((resolve, reject) => {
  getTeamMembers(teamId).then((membersArray) => {
    const deleteMemberPromises = membersArray.map((member) => deleteMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteSingleTeam(teamId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export {
  viewMemberDetails,
  viewTeamDetails,
  deleteTeamMembers,
};
