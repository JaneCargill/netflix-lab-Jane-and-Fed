var React = require('react');
var ReactDOM = require('react-dom');

var MovieContainer = require('./container/MovieContainer')

window.onload = function(){
  ReactDOM.render(
    <MovieContainer/>,
    document.getElementById('app')
  );
}
