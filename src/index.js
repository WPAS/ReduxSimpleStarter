//libraries and API's
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//our app components
import SearchBar from './components/search_bar';
var Title = require("./components/title");  //a different syntax that does the same
import VideoList from './components/video_list';

const API_KEY = "AIzaSyDA4nwhO8OqTQ511XY5lQaB7Dn7bF2A710";

var styles = {
  "padding": 20,
  "color": "red",
  "fontWeight": "900"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'Monty Python'}, (videos) => {
      this.setState( {videos} );
      console.log(videos);
    });

  }

  render() {
    return (
      <div style={styles}>
          <Title />
          <SearchBar />
          <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
