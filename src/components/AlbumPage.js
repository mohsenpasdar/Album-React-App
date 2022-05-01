import React from 'react';
import { connect, useSelector  } from 'react-redux';
import { useParams } from "react-router-dom";

const AlbumPage = (props) => {
  const params = useParams();
  const id = parseInt(params.id)
  const album = props.albums.find((album) => album.id === id);
  
  return (
    <div>
      <h1>Album Page</h1>
      <p>this is list from album {album.id}</p>

      {album.list.map((pic) => (
        <div key={pic}>
          {pic}

        </div>

      ))}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(AlbumPage)
