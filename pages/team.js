import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import Button from 'react-bootstrap';
// import { deleteSingleTeam, getTeam } from '../api/teamData';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
// import TeamCard from '../components/TeamCard';
import MemberCard from '../components/MemberCard';
import SearchBar from '../components/Search';
// import MemberForm from '../components/forms/MemberForm';

function TeamPage() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then((memberArray) => {
      setMembers(memberArray);
      setFilteredMembers(memberArray);
    });
  };

  useEffect(() => {
    getAllMembers();
  }, [user]);

  return (
    <div className="d-flex flex-wrap">
      <title>Team Roster</title>
      <h1>Meet the Members</h1>
      <SearchBar filteredMembers={members} setFilteredMembers={setFilteredMembers} />
      <div className="d-flex flex-wrap flex-row">
        {
        filteredMembers.map((member) => <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />)
        }
      </div>
    </div>
  );
}

export default TeamPage;
