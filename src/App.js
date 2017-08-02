import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.files.length < 1) return;
    let file = e.target.files[0];
    this.setState({
      file: file
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('image', this.state.file, this.state.file.name);
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    axios.post('/images', formData, config).then(result => {
      console.log(result);
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="file" accept=".png, .jpg, .jpeg, .gif" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
