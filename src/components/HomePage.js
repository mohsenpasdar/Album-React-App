import React, { useState, useEffect } from 'react';
import Card from './Card'

const HomePage = () => {
  const [state, setState] = useState({
    albums: [],
    loaded: false
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
        .then(json => {
          setState({
            albums: json,
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
      <img src={require("../images/logo192.png")} alt="react logo" />
      {state.albums.map((album) => (
        <Card album={album} key={album.id} />
      ))}
    </div>
  )
}

export default HomePage
