var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetails = require('../components/MovieDetails');
var ActorSelector = require('../components/ActorSelector');

var celebs = [{firstname: 'Ben', surname: 'Stiller'}, {firstname: 'Adam', surname: 'Sandler'}]
// var url = 'http://netflixroulette.net/api/api.php?actor=Ben%20Stiller';
// var url = 'http://netflixroulette.net/api/api.php?actor='+this.focusActor.name'%20Stiller';

var MovieContainers = React.createClass({
  getInitialState: function () {
    return { movies: [], focusMovie: null, actors: [], focusActor: null}
  },

  componentDidMount: function() {
    var url = 'http://netflixroulette.net/api/api.php?actor=Ben%20Stiller';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if(request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({movies: data})
        this.setState({actors: celebs})
      }
    }.bind(this)
    request.send();
  },
  setFocusMovie:function(movie){
    this.setState({ focusMovie: movie})
  },
  setFocusActor:function(actor){
    this.setState({ focusActor: actor})
  },
  render: function() {
    return(
      <div>
        <h3>Movie Container</h3>
        <ActorSelector actors={this.state.actors} selectActor={this.setFocusActor}/>
        <MovieSelector movies={this.state.movies} selectMovie={this.setFocusMovie}/>
        <MovieDetails movie={this.state.focusMovie}/>
      </div>
      );
  }
});

module.exports = MovieContainers;