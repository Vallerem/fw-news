import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Button } from "reactstrap";
import { logout } from "../redux/actions/user";

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    this.props.logout();
    // setTimeout(() => {
    //   this.props.history.push("/login");
    // }, 2000);
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link className="news-link" to="/">
            News
          </Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="danger" onClick={this.logout}>
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
