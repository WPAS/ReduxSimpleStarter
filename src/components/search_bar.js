import React, { Component } from 'react';

var styles = {
  "border": "2px solid darkgrey",
  "padding": "5px 10px",
  "margin": 5
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          style={styles}
          placeholder="Szukaj filmu"
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;
