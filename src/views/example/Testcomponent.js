import React from "react";
import "../App.scss";
import Testss from "./test";
class Testcomponent extends React.Component {
  state = {
    fname: "",
    lname: "",
    arr: [
      { name: "devTam", id: 22, des: "alo" },
      { name: "hehehe", id: 222, des: "kkkk" },
    ],
  };
  handleOnChangeFirstName = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };
  handleOnChangeLastName = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("cham vao em di");
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name: </label>
          <br />
          <input
            placeholder="enter first name"
            type="text"
            value={this.state.fname}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          ></input>
          <br />
          <label htmlFor="lname">Last name: </label>
          <br />
          <input
            type="text"
            value={this.state.lname}
            onChange={(event) => this.handleOnChangeLastName(event)}
          ></input>
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
        <Testss
          name={this.state.fname}
          age={100}
          address={"Ha Tinh"}
          arr={this.state.arr}
        />
      </>
    );
  }
}
export default Testcomponent;
