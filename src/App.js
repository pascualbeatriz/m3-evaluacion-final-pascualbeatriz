import React from 'react';
import {getUrlData} from './Services/Fetch';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:[],
      gap: ''
    }
    this.getInputValue = this.getInputValue.bind(this);
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

getInputValue(event){
  const gap = event.currentTarget.value;
  this.setState({
    gap: gap
  });
}

  render() {
    const {characters,gap} = this.state;
    return (
      <div className="app">
        <h1 className="app__tittle">titulo, aqui va el logo</h1>
        <Filters 
        getInputValue = {this.getInputValue}
        gap = {gap}
        />

        <CharacterList
        characters = {characters}
        gap = {gap}
        />      
      </div>
    );
  }
}


export default App;
