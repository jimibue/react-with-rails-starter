import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    things: [],
    loading: true,
    error: false
  };
  componentDidMount() {
    axios
      .get("api/things")
      .then(response => {
        console.log(response);
        this.setState({
          things: response.data,
          loading: false,
          error: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false,
          error: true
        });
      });
  }
  getThings() {
    const { loading, error, things } = this.state;
    if (error) {
      return <div>Error occurred open inspector</div>;
    }
    if (loading) {
      return <div>Loading data...</div>;
    }
    return things.map(thing => <p key={`t-${thing.id}`}>{thing.name}</p>);
  }
  render() {
    return <div className="App">{this.getThings()}</div>;
  }
}

export default App;
