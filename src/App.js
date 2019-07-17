import React, { Component } from 'react'

export default class App extends Component {
  state = {
    pLoad: false,
    data: ""
  }

  componentDidMount() {
    this.grabData();  
  }

  grabData = async () => {
    //data is coming from jsonplaceholder
    const addr = "https://jsonplaceholder.typicode.com/users";
    const rData = await fetch(addr);
    const fData = await rData.json();
    await this.setState({
      pLoad : true,
      data  : fData
    });
  }

  //this is the method that arrange the data in a HTMl format
  presentation = (arr) => {
    return arr.map(item =>
      <div key = {item.id}>
        {/* let's assume that name from item is gonna be the title */}
        <h3>Title: {item.name}</h3>
        {/* let's assume that email from item is gonna be the excerpt */}
        <p>Excerpt: {item.email}</p>
        <br></br>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>CTO.ai</h1>
        {this.state.pLoad ? this.presentation(this.state.data) : null}
      </div>
    )
  }
}

