import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Button } from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link className="news-link" to="/">
            News
          </Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="danger" onClick={() => console.log("logout")}>
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
