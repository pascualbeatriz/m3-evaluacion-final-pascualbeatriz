import React from 'react';
import {getUrlData} from './Services/Fetch';
import CharacterList from './components/CharacterList';
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
      characters:data.results
    });
  });
}

  render() {
    const {characters} = this.state;
    return (
      <div className="app">
        <h1 className="app__tittle">titulo, aqui va el logo</h1>
       <CharacterList
       characters = {characters}
       />      
      </div>
    );
  }
}


export default App;
