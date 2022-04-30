import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Card from './Card'

// const albums = fetch('https://jsonplaceholder.typicode.com/albums')
//   .then(response => response.json())
//   .then(json => console.log(json))

// console.log(albums);
// console.log(typeof(albums));

const HomePage = (props) => (
  <div>
    <h1>This is my HomePage</h1>

    <Card albums={props.albums}/>

  </div>
)

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(HomePage)
