var React = require('react');

var ActorSelector = React.createClass({
  getInitialState: function (){
    return {selectedIndex: undefined};

  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState( { selectedIndex: newIndex});
    var focus = this.props.selectActor( this.props.actors[newIndex]);
    console.log(this.props.actors[newIndex]);

  },

  render: function()
{
  var options = this.props.actors.map(function(actor, index){
    return <option value={index} key={index}>{actor.surname}</option>
    })
  return (
    <select id="actors" value={this.state.selectedIndex} onChange={this.handleChange}>{options}
    </select>
    )
}})

module.exports = ActorSelector;