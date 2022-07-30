/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
// import members from '../sample_data/members.json';

export default function NavBar() {
  // const [searchTerm, setSearchTerm] = useState('');

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>TEAM ROSTER</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/team">
              <Nav.Link>View Team</Nav.Link>
            </Link>
            <Link passHref href="/member/new">
              <Nav.Link>Add A Member</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/*
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search Members</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search Members"
        name="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
            <button type="submit">Search</button>;
        }}
      />
      {members.filter((val) => {
        if (searchTerm === '') {
          return val;
        } if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        } else
      }).map((val, key) => {
        return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="user" key={key}>
          <div>{val.name}</div>
        </div>
      );
        })}
    </form> */}
    </Navbar>
  );
}
