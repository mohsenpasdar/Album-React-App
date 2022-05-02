import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux';



const Card = (props) => {

  return (
    <div>
      <Link to={`/album/${props.album.id}`}>
        album title: {props.album.title}

      </Link>

    </div>
  )
}

export { Card as default }
