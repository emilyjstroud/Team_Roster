import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { createMember, updateMember } from '../../api/memberData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  role: '',
  image: '',
  firebaseKey: '',
};

function MemberForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [teams, setMembers] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // getMembers(user.uid).then(setMembers);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateMember(formInput)
        .then(() => router.push('/team'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMember(payload).then(() => {
        router.push('/team');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Member</h2>
      <FloatingLabel controlId="floatingInput1" label="Member Name" className="mb-3">
        <Form.Control type="text" placeholder="Member's Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Member Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Member Role" className="mb-3">
        <Form.Control type="text" placeholder="Role" name="role" value={formInput.role} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Member</Button>
    </Form>
  );
}

//   // PROP TYPES
MemberForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

//   // DEFAULT PROPS
MemberForm.defaultProps = {
  obj: initialState,
};

export default MemberForm;
