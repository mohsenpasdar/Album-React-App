import React, { useState, useEffect } from 'react';
import { connect, useSelector  } from 'react-redux';

import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const params = useParams();
  const id = parseInt(params.id)

  const [state, setState] = useState({
    album: [],
    loaded: false
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
        .then(json => {
          setState({
            album: json,
            loaded: true
          })
        })
  }, [])


  if (!state.loaded) {
    return (
      <div>Please Wait ... </div>
    )
  }

  return (
    <div>
      <img src={require("../images/logo192.png")} />
      <p>list of pictures from album id: {id}</p>
      {state.album.map((picture) => (
        <div key={picture.id}>{picture.title}</div>
      ))}

    </div>
  )
}

export default AlbumPage
