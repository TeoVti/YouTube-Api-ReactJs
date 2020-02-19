import React from "react";
import SearchBar from "./components/Searchbar";
import youtube from "./configs/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("dogs are funny");
  }

  handleSubmit = async termFromSearchBar => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div>
          <div className="ui-row">
            <div>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five-wide-column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
