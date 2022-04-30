import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux';



const Card = (props) => {

  return (
    <div>
      <Link to={`/album/${props.album.id}`}>
        album title: {props.album.title}
        <img src={require("../images/logo192.png")} />
      </Link>

    </div>
  )
}

export { Card as default }
