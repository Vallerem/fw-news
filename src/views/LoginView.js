import React, { Component } from "react";
import Validator from "validator";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Button
} from "reactstrap";

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

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    console.log(data);
    if (!Validator.equals(data.username, "user")) {
      errors.username = "Invalid Username";
    }
    if (!Validator.equals(data.password, "FCtb2PGbHpgq")) {
      errors.password = "Invalid password";
    }
    return errors;
  };

  handleChange = e => {
    console.log(this.state);
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {}
    });
  };

  render() {
    const { data, loading, errors } = this.state;

    return (
      <div className="h-100 row align-items-center mt-5">
        <div
          className="col-12 col-md-6 col-lg-6 flex-xs-middle mx-auto"
          style={{ textAlign: "center" }}
        >
          <img
            className="img-fluid login-fw-logo"
            src="img/fw_logo.jpg"
            alt="Future Wrkshops logo"
          />
        </div>
        <div className="col col-12 col-md-6 col-lg-6">
          <Form onSubmit={this.handleSubmit} loading={loading}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                required
                onChange={this.handleChange}
                valid={!errors.username}
              />
              <FormFeedback>{errors.username}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                required
                onChange={this.handleChange}
                valid={!errors.password}
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <Button
              disabled={
                !data.username.length || !data.password.length || loading
              }
              color="primary"
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginView;
