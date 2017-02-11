//component created just to check if syntax used in Codecademy is working
//in this boilerplate, because Stephen Grider is using different syntax
//in many places of the app

var React = require('react');

var styles = {
  "margin-top": 10,
  "color": "darkblue",
  "background": "lightblue",
  "padding": "10px 0 10px 40px"
}

var Title = React.createClass({

  render: function() {
    return <h1 style={styles}>Filmy z YouTube</h1>;
  }

});

module.exports = Title;
