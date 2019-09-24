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
        <header className="app__header">
          <h1 className="app__tittle">titulo, aqui va el logo</h1>
        </header>
        <main className="app__main">
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
            <Route path="/character_detail/:id" render = { (routerProps) => {
              return(
                <CharacterDetail 
                  routerProps = {routerProps}
                  characters = {characters}
                />
              );
            }}
            />
          </Switch>
        </main>
        <footer className="app__footer">Ejercicio Beatriz Pascual</footer>
      </div>
    );
  }
}


export default App;
