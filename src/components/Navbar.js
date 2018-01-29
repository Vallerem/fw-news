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
  DropdownToggle
} from "reactstrap";

import newsAPI from "../api/news";
import { logout } from "../redux/actions/user";
import DropdownItemsList from "./DropdownItemsList";

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount = () => {
    newsAPI
      .getNews()
      .then(data => {
        this.setState({
          news: data.news
        });
      })
      .catch(err => this.props.logout());
  };

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
              {this.state.news.map((article, index) => (
                <DropdownItemsList key={article.id} article={article} />
              ))}
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
