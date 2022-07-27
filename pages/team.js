import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import Button from 'react-bootstrap';
// import { deleteSingleTeam, getTeam } from '../api/teamData';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
// import TeamCard from '../components/TeamCard';
import MemberCard from '../components/MemberCard';

function TeamPage() {
  const [setTeam] = useState([]);
  const [members] = useState([]);

  const { user } = useAuth();

  const getWholeTeam = () => {
    getMembers(user.uid).then(setTeam);
  };

  useEffect(() => {
    getWholeTeam();
  }, [user]);

  return (
    <div className="d-flex flex-wrap">
      <h1>Team $hit</h1>
      {
    members.map((member) => <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getMembers} />)
    }
    </div>
    // <>
    //   <Card style={{ width: '18rem', margin: '10px' }}>
    //     <Card.Body>
    //       <Card.Title>{teamObj.name}</Card.Title>
    //       <Link href={`/members/${teamObj.firebaseKey}`} passHref>
    //         <Button variant="primary" className="m-2">VIEW</Button>
    //       </Link>
    //       <Link href={`/members/edit/${teamObj.firebaseKey}`} passHref>
    //         <Button variant="info">EDIT</Button>
    //       </Link>
    //       <Button variant="danger" onClick={deleteSingleTeam} className="m-2">
    //         DELETE
    //       </Button>
    //     </Card.Body>
    //   </Card>
    //   <div className="d-flex flex-wrap">
    //     {/* TODO: map over books here using BookCard component */}
    //     {teams.map((team) => <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getWholeTeam} />)}
    //   </div>
    // </>
  );
}

export default TeamPage;
