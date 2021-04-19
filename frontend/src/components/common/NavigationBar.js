import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  const padding = {
    padding: 5
  }
  return (
    <Navbar collapseOnSelect expand="lg" /* bg="dark" variant="light" */>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/players">players</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/teams">teams</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar


/* <Nav.Link href="#" as="span">
              {user
                ? <em>{user} logged in</em>
                : <Link to="/login">login</Link>
              }
            </Nav.Link> */