var React = require('react');

var MovieDetails = function ( props ) {
  if(!props.movie){
    return <h3> NO Movie Selected</h3>
  }
  return(<div>
    <h3>Movie: {props.movie.show_title}</h3>
    <h3>Category: {props.movie.category}</h3>
    <h3>Director: {props.movie.director}</h3>
    <img src={props.movie.poster}></img>
  </div>)
}

module.exports = MovieDetails;