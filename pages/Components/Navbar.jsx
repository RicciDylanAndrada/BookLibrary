import React from "react"
import { Nav,Form,Navbar, NavDropdown,FormControl,Button } from "react-bootstrap";

export default function nav() {

    return (
        <div>
        <Navbar  fluid bg="light" expand="lg">
  <Navbar.Brand href="#">Book Worms</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse className="nav-contents" id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Browse</Nav.Link>
      <Nav.Link href="#action3">My Shelf</Nav.Link>

      
      
    </Nav>
    <Form className="d-flex ml-auto searchbar">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button className="custom-btn" variant="outline-success">Search</Button>
    </Form>
    <Nav className="ms-auto">
    <Nav.Link href="#action4">Account</Nav.Link>
    <Nav.Link href="#action5">Add Book </Nav.Link>


    </Nav>
    
      
  </Navbar.Collapse>
</Navbar>
        </div>

    )
}
