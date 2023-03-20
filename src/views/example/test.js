import React from "react";
import logo from "../logo.svg";
import "../App.scss";
class testss extends React.Component {
  state = {
    name: "devTam",
    email: "nguyentrongtam2x2@gmail.com",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target);
  };
  render() {
    return (
      <>
        <input
          value={this.state.name}
          type="text"
          onChange={(event) => this.handleOnChangeName(event)}
        />
        <div className="testss">{this.state.name} dep trai vcl</div>
        <div className="testss2">
          email cua {this.state.name} la {this.state.email}
        </div>
      </>
    );
  }
}
export default testss;
