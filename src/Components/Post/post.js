import React, { Component } from "react";
import Header from "../Header/header";

export default class Post extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Header />

        <div className="row d-flex flex-column pt-5 ">
          <div className="col-md-6 mx-auto bg-light shadow-lg p-5">
                <h2>title</h2>
                <p>body</p>
          </div>
        </div>
      </div>
    );
  }
}
