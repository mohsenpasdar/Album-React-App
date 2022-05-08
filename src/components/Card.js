import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux';



class Card extends React.Component {


  handleClick = () => {
    this.props.dispatch({
      type: 'GET_ID',
      id: this.props.album.id
    })
  }
  render() {
    return (
      <div>
        <Link to={`/album/${this.props.album.id}`} onClick={this.handleClick}>
          album title: {this.props.album.title}
        </Link>

      </div>
    )
  }
}



export default connect()(Card)
