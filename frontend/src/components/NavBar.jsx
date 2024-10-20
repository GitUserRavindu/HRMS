import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useLocation, Link, useNavigate } from "react-router-dom";

const HRMSNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {/* Conditionally render the Navbar based on the current path */}
      {location.pathname !== "/" && location.pathname !== "/notAuthorized" && (
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/dashboard">
              Jupiter
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dashboard">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={`/profile`}>
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/help">
                help
              </Nav.Link>
              <NavDropdown title="Authorized actions! " id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/addUser">
                  add user
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/addEmployee">
                  add Employee
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={Link} to="/report">
                  Report Generation
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Employee_Information_Management"
                >
                  Employee Information Management
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default HRMSNavBar;
