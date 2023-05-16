import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {

  const logOut = () => {
    window.open(`http://localhost:5000/auth/logout`, "_self")
  }

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand><Link to='/' style={{ textDecoration: "none", color: "black" }}>tnpLab.com</Link></Navbar.Brand>
          <Navbar.Toggle />
          {user ? (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text onClick={logOut}>
                <ul className="list">
                  <li className="listItem">
                    <img
                      src={user.photos[0].value}
                      alt=""
                      className="avatar"
                    />
                  </li>
                  <li className="listItem">{user.displayName}</li>
                  <li className="listItem" onClick={logOut}>
                    Logout
                  </li>
                </ul>
              </Navbar.Text>
            </Navbar.Collapse>
          ) : (<Link to='/login' style={{ textDecoration: "none" }}>Login</Link>)}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header