import React from "react";
import "./sch.css";

class Searchbar extends React.Component {
  state = {
    term: ""
  };
  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <input
              onChange={this.handleChange}
              placeholder="Search for videos"
              name="video-search"
              type="text"
              value={this.state.term}
            />
            <button>Search</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Searchbar;
