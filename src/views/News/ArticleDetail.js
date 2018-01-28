import React, { Component } from "react";
import { connect } from "react-redux";
// import {
//   Button,
//   Card,
//   CardImgOverlay,
//   CardText,
//   CardTitle,
//   CardImg
// } from "reactstrap";

import newsAPI from "../../api/news";
import { logout } from "../../redux/actions/user";

export class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentWillReceiveProps = () => {
    const { match: { params } } = this.props;
    this.getArticle(params.id)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          return this.props.history.push("/not-found");
        }
        this.props.logout();
      });
  };

  componentDidMount = () => {
    const { match: { params } } = this.props;
    this.getArticle(params.id)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          return this.props.history.push("/not-found");
        }
        this.props.logout();
      });
  };

  getArticle = id => {
    return newsAPI.getArticle(id);
  };

  render() {
    const { article } = this.state;
    return (
      <div className="container-fluid article-detail">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1>{article.id}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { logout })(ArticleDetail);
