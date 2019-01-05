import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
      selectedFile: null
    }  
  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  }
  uploadHandler = () => { 
    var data = new FormData();
    data.append('image',this.state.selectedFile,this.state.selectedFile.name);
    fetch('192.168.0.115',{
      method: "POST",
      headers: {
        "Content-Type":"image/png"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json)
    .then(img => console.log(img));
    console.log(this.state.selectedFile)
  }
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileChangedHandler}></input>
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
    );
  }
}

export default App;
