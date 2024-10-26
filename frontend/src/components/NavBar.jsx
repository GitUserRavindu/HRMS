import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLocation, Link, useNavigate } from "react-router-dom";

import Logo from "../assets/Jupiter_Logo.png";
import Cookies from "js-cookie";

import NotificationBellIcon from "./NotificationBellIcon";
import profileIcon from "../assets/profile-icon.svg";
import logoutIcon from "../assets/logout.svg";
import homeIcon from "../assets/Home.svg";
import helpIcon from "../assets/Help.svg";
import authorizedIcon from "../assets/AuthorizedActions.svg";

const token = Cookies.get("authToken");

const HRMSNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = Cookies.get("role");

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/");
  };

  return (
    <>
      {location.pathname !== "/" &&
        location.pathname !== "/notAuthorized" &&
        location.pathname !== "/loginHelp" && (
          <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/dashboard">
                <img src={Logo} alt="Jupiter Logo" style={{ height: "40px" }} />
              </Navbar.Brand>
              <Nav className="me-auto ms-3">
                <Nav.Link as={Link} to="/dashboard">
                  <img
                    src={homeIcon}
                    alt="Home"
                    style={{ width: "32px", height: "32px" }}
                    title="Home"
                  />
                </Nav.Link>
                <Nav.Link as={Link} to="/help">
                  <img
                    src={helpIcon}
                    alt="Help"
                    style={{ width: "32px", height: "32px" }}
                    title="Help"
                  />
                </Nav.Link>
                {(role === "Admin" || role === "HR Manager") && (
                  <NavDropdown
                    title={
                      <img
                        src={authorizedIcon}
                        alt="authorized Actions"
                        style={{ width: "32px", height: "32px" }}
                        title="authorized Actions"
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    {/* Only Admin and HR manager can add users */}
                    <NavDropdown.Item as={Link} to="/addUser">
                      Add User
                    </NavDropdown.Item>

                    {/* Only Admin and HR manager can add employees */}
                    <NavDropdown.Item as={Link} to="/addEmployee">
                      Add Employee
                    </NavDropdown.Item>

                    {/* Only HR manager can access report generation */}
                    {role === "HR Manager" && (
                      <NavDropdown.Item as={Link} to="/report">
                        Report Generation
                      </NavDropdown.Item>
                    )}

                    {/* Only HR manager can access Employee Information Management */}
                    {role === "HR Manager" && (
                      <NavDropdown.Item
                        as={Link}
                        to="/Employee_Information_Management"
                      >
                        Employee Information Management
                      </NavDropdown.Item>
                    )}
                  </NavDropdown>
                )}
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/notification">
                  <NotificationBellIcon />
                </Nav.Link>
                <Nav.Link as={Link} to={`/profile`}>
                  <img
                    src={profileIcon}
                    alt="profile"
                    style={{ width: "32px", height: "32px" }}
                    title="Profile"
                  />
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="ms-auto">
                  <img
                    src={logoutIcon}
                    alt="logout"
                    style={{ width: "32px", height: "32px" }}
                    title="Logout"
                  />
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )}
    </>
  );
};

export default HRMSNavBar;
