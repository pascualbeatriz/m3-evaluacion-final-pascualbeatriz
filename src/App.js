import React from 'react';
import {getUrlData} from './Services/Fetch';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import {Switch, Route} from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" render = { () => {
              return (
                <Home 
                  getInputValue = {this.getInputValue}
                  gap = {gap}
                  characters = {characters}
                />   
              );
            }}
            />
            <Route path="/character_detail" render = { () => {
              return(
              
              );
            }}
            />
          </Switch>
          
          
      </div>
    );
  }
}


export default App;
