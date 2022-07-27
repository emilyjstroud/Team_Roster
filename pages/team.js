import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap/Card';
// import { deleteSingleTeam, getTeam } from '../api/teamData';
import { getTeam } from '../api/teamData';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';

function TeamPage() {
  const [teams, setTeam] = useState([]);

  const { user } = useAuth();

  const getWholeTeam = () => {
    getTeam(user.uid).then(setTeam);
  };

  useEffect(() => {
    getWholeTeam();
  }, [user]);

  return (
    // <Card style={{ width: '18rem', margin: '10px' }}>
    //   <Card.Body>
    //     <Card.Title>{teamObj.name}</Card.Title>
    //     <Link href={`/members/${teamObj.firebaseKey}`} passHref>
    //       <Button variant="primary" className="m-2">VIEW</Button>
    //     </Link>
    //     <Link href={`/members/edit/${teamObj.firebaseKey}`} passHref>
    //       <Button variant="info">EDIT</Button>
    //     </Link>
    //     <Button variant="danger" onClick={deleteSingleTeam} className="m-2">
    //       DELETE
    //     </Button>
    //   </Card.Body>
    // </Card>
    <div className="d-flex flex-wrap">
      {/* TODO: map over books here using BookCard component */}
      {
    teams.map((team) => <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getWholeTeam} />)
    }
    </div>
  );
}

export default TeamPage;
