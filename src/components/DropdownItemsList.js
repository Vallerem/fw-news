import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { DropdownItem } from "reactstrap";

import { trimContent } from "../utils/stringTrimmer";

const DropdownItemsList = props => {
  const { article } = props;
  return (
    <DropdownItem tag={Link} to={`/${article.id}`}>
      {`${trimContent(article.title, 6)}`}
    </DropdownItem>
  );
};

DropdownItemsList.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
  }).isRequired
};

export default DropdownItemsList;
