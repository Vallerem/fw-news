import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import { logout } from "../redux/actions/user";

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div>
        <Navbar
          style={{
            background: "#fff",
            borderBottom: "1px solid lightgrey",
            boxShadow: "0px 1px 1px #de1dde"
          }}
        >
          <Link className="navbar-brand " to="/">
            <img
              style={{ maxWidth: "65%" }}
              src="img/fw_logo_home.png"
              alt="Home icon"
            />
          </Link>
          <UncontrolledDropdown>
            <DropdownToggle caret>News</DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag={Link} to="/1">
                Article 1
              </DropdownItem>
              <DropdownItem tag={Link} to="/2">
                Article 2
              </DropdownItem>
              <DropdownItem tag={Link} to="/3">
                Article 3
              </DropdownItem>
              <DropdownItem tag={Link} to="/4">
                Article 4
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline color="danger" onClick={this.logout}>
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default connect(null, { logout })(NavbarComp);
