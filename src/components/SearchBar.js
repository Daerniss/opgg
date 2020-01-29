import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onFormSubmit = e => {
		e.preventDefault();
		this.props.onQuerySubmit(this.state.query);
  };

  onInputChange = e => {
		this.setState({ query: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
					placeholder="Summoner name..."
					value={this.state.query}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
