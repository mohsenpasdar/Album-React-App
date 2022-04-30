import React from 'react';
import { connect, useSelector  } from 'react-redux';
import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const { id } = useParams();
  const album = useSelector((state) => state.albums[id-1]);
  return (
    <div>
      <h1>Album Page</h1>
      <p>this is list from album {id}</p>

      {album.list.map((pic) => (
        <div key={pic}>
          {pic}

        </div>

      ))}

    </div>
  )
}

export default AlbumPage
