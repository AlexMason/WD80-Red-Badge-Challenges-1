import React, { Component } from "react";
import { Input } from "reactstrap";

class SearchIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      searchTerm: "",
    };
  }

  handleChange(event) {
    switch (event.target.id) {
      case "search":
        this.setState({ searchTerm: event.target.value });
        return;
    }
  }

  render() {
    return (
      <div>
        <Input
          id="search"
          value={this.state.searchTerm}
          onChange={(e) => this.handleChange(e)}
          placeholder="Search Here"
        />
        <h3>Results:</h3>
        {this.state.things
          .filter((thing) => thing.includes(this.state.searchTerm))
          .map((thing) => {
            return <div>{thing}</div>;
          })}
      </div>
    );
  }
}

export default SearchIndex;
