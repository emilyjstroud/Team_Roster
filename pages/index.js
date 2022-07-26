// import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
// import { getMembers } from '../api/memberData';

function Home() {
  // Setting State for Members
  // const [members, setMembers] = useState([]);

  // Gets UID
  const { user } = useAuth();

  // API Call for getting All Members
  // const getAllMembers = () => {
  //   getMembers(user.uid).then(setMembers);
  // };

  // API Call to get All Members on component render
  // useEffect(() => {
  //   getAllMembers();
  // }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
