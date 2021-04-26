import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  const padding = {
    padding: 5
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/playercareer">player career</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/topplayers">top players</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/compareplayers">compare players</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/teams">teams</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/percentiles">percentiles</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/contactus">contact us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
