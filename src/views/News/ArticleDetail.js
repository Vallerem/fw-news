import React, { Component } from "react";
import { connect } from "react-redux";
import newsAPI from "../../api/news";
import { logout } from "../../redux/actions/user";

export class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

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
          <div className="col-12">
            <h1 style={{ marginTop: 10 }}>{article.title}</h1>
            <h5>
              {article.source}{" "}
              <small className="article-date">{article.date}</small>
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-2">
            <img
              className=" article-image-detail"
              src={article.image}
              alt={article.title}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-10 article-main-content">
            <p>{article.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { logout })(ArticleDetail);
