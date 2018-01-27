import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button
} from "reactstrap";
import axios from "axios";

export class NewsList extends Component {
  render() {
    return (
      <div>
        <Button color="primary" onClick={ () => axios.get("api/v1/news").then(res => console.log(res)) }>Send call</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
