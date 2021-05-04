import React, { Component } from "react";

export default class DogIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doggyImg: "",
    };
  }

  fetchDoggyImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => this.setState({ doggyImg: res.message }))
      .catch((res) => this.setState({ doggyImg: "" }));
  };

  componentDidMount() {
    this.fetchDoggyImg();
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchDoggyImg}>Fetch!</button>
        <hr />
        {this.state.doggyImg !== "" ? (
          <img src={this.state.doggyImg} />
        ) : (
          <div>
            Could not find a picture of a cute doggy, its a little ruff around
            here.
          </div>
        )}
      </div>
    );
  }
}
