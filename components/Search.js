import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({ filteredMembers, setFilteredMembers }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = filteredMembers.filter((member) => member.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredMembers(results);
  };

  const resetInput = () => {
    setSearchInput('');
    setFilteredMembers(filteredMembers);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Members"
          aria-label="Search Members"
          value={searchInput}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
        <Button variant="danger" onClick={resetInput}>
          Reset Search
        </Button>
      </InputGroup>
    </div>
  );
}

SearchBar.propTypes = {
  filteredMembers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredMembers: PropTypes.func.isRequired,
};

export default SearchBar;
