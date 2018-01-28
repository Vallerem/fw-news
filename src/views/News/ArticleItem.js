import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardImgOverlay, CardText, CardTitle, CardImg } from "reactstrap";

const ArticleItem = props => {
  const { article } = props;

  const trimContent = content => {
    let wordsArray = content.split(" ");
    return wordsArray.slice(0, 50).join(" ");
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card
        className="article-card no-gutters"
        inverse
        tag={Link}
        to={`/${article.id}`}
      >
        <CardImg
          style={{ height: 300 }}
          width="100%"
          src={
            article.image.length
              ? article.image
              : "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
          }
          alt={`article about ${article.title}`}
        />
        <CardImgOverlay style={{ background: "rgba(0,0,0,0.4)" }}>
          <CardTitle>{article.title}</CardTitle>
          <CardText>{`${trimContent(article.content)}...`}</CardText>
          <CardText>{article.date}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
  }).isRequired
};

export default ArticleItem;
