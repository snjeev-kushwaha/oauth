import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand><Link to='/' style={{ textDecoration: "none", color: "black" }}>tnpLab.com</Link></Navbar.Brand>
          <Navbar.Toggle />
          {user ? (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Ishu kushwaha: <a href="/login">Logout</a>
              </Navbar.Text>
            </Navbar.Collapse>
          ) : (<Link to='/login' style={{ textDecoration: "none" }}>Login</Link>)}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header