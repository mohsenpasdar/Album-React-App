import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux';



const Card = (props) => {

  return (

    <div>
      
      {props.albums.map((album) => {
        return (
          <div key={album.id}>
            <Link to={`/album/${album.id}`}>
              album title: {album.title}

            </Link>

          </div>
        )
      })}

    </div>
  )
}

export { Card as default }
