import React, { Component } from "react";
import { connect } from "react-redux";

import newsAPI from "../../api/news";
import { logout } from "../../redux/actions/user";

import ArticleItem from "./ArticleItem";

export class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount = () => {
    this.getNews()
      .then(data => {
        this.setState({
          articles: data.news
        });
      })
      .catch(err => this.props.logout());
  };

  getNews = () => {
    return newsAPI.getNews();
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="row mt-4 mb-4 no-gutter">
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </div>
    );
  }
}

export default connect(null, { logout })(NewsList);
