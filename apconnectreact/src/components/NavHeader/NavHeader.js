import React from "react"
import "./NavHeader.css"
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl
} from "react-bootstrap"

class NavHeader extends React.Component {

  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">File Hosting .ml<h6>Version 1.2</h6>
        </Navbar.Brand>

      </Navbar>
 
    )
  }
}
export default NavHeader