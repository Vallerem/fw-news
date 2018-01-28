import React, { Component } from "react";
import { connect } from "react-redux";
import Validator from "validator";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from "reactstrap";
import { login } from "../redux/actions/user";
import { verifyJWT } from "../utils/JWThelpers";

export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }

  componentWillMount = () => {
    return verifyJWT() ? this.props.history.push("/") : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .login(this.state.data)
        .then(() => this.props.history.push("/"));
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.equals(data.username, "user")) {
      errors.username = "Invalid Username";
    }
    if (!Validator.equals(data.password, "FCtb2PGbHpgq")) {
      errors.password = "Invalid password";
    }
    return errors;
  };

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {}
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="h-100 row align-items-center mt-5">
        <div
          className="col-12 col-md-6 col-lg-6 flex-xs-middle mx-auto"
          style={{ textAlign: "center" }}
        >
          <img
            className="img-fluid login-fw-logo"
            src="img/fw_logo.png"
            alt="Future Wrkshops logo"
          />
        </div>
        <div className="col col-12 col-md-6 col-lg-6">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                className="login-inputs"
                type="text"
                name="username"
                id="username"
                required
                onChange={this.handleChange}
                valid={!errors.username}
                autoComplete="username"
              />
              <FormFeedback>{errors.username}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                className="login-inputs"
                type="password"
                name="password"
                id="password"
                required
                onChange={this.handleChange}
                valid={!errors.password}
                autoComplete="current-password"
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <Button color="primary" type="submit">
              Log In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: !!state.user
  };
};

export default connect(mapStateToProps, { login })(LoginView);
