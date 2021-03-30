import { Navbar/* , Nav */ } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

const NavigationBar = () => {
  /* const padding = {
    padding: 5
  } */
  return (
    <Navbar collapseOnSelect expand="lg" /* bg="dark" variant="light" */>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/playerstats">player stats</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/compareplayers">compare players</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/teamstats">team stats</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/compareteams">compare teams</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/teamstatsdistribution">team stats distribution</Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse> */}
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