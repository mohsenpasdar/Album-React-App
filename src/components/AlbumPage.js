import React from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

const AlbumPage = (props) => {
  const { id } = useParams();

  return (
    <div>
      <h1>Album Page</h1>
      <p>this is list from album {id}</p>
      <p>abc {props.albums[1].title}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(AlbumPage)
