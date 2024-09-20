import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-square-youtube fa-shake fa-2xl"  style={{color: "#0a78cd",}} />
              {' '}
            Media-Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header