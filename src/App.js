import React from 'react';
import {getUrlData} from './Services/Fetch';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:[]
    }
  }

componentDidMount (){
  this.getUrl();
}

getUrl(){
  getUrlData()
  .then(data => {
    this.setState({
      characters:data
    });
  })

}

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
