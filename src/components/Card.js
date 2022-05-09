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
      <div className="card">
        <Link className="card__body" to={`/album/${this.props.album.id}`} onClick={this.handleClick}>
          <img src="/logo192.png" alt="react logo" />
          <p>{this.props.album.title}</p>
        </Link>

      </div>
    )
  }
}



export default connect()(Card)
