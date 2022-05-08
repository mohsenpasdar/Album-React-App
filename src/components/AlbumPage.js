import React, { useState, useEffect } from 'react';
import { connect, useSelector  } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";

const AlbumPage = (props) => {
  // const params = useParams();
  // const id = parseInt(params.id);
  const id = props.albumId
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

  // in case http://localhost:3000/album/:id first loads i.e.: when there is no albumId
  let navigate = useNavigate();
  useEffect(() => {
    if (!props.albumId) {
      navigate("/");
    }
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

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(AlbumPage)
