import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const HomeNavbar = () => {
    return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">เมนู</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">หน้าหลัก</Nav.Link>
            <Nav.Link href="/Analyst">ดูข้อมูล</Nav.Link>
            <NavDropdown title="ลง" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action/3.1">ตัวเลือกที่1</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">
              ตัวเลือกที่2
              </NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">ตัวเลือกที่3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/3.4">
              ตัวเลือกที่เพิ่มเติม
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}

export default HomeNavbar;
