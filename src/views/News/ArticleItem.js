import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardImgOverlay, CardText, CardTitle, CardImg } from "reactstrap";
import { trimContent } from "../../utils/stringTrimmer";


const ArticleItem = props => {
  const { article } = props;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card
        className="article-card no-gutters"
        inverse
        tag={Link}
        to={`/${article.id}`}
      >
        <CardImg
          style={{ height: 320 }}
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
          <CardText>{trimContent(article.content, 40)}</CardText>
          <CardText style={{position: "absolute", bottom: 20, left: 20}} >{article.date}</CardText>
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
