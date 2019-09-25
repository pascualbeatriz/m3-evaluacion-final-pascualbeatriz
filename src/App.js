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
      gap: '',
      type:''
    }
    this.getInputValue = this.getInputValue.bind(this);
    this.getType = this.getType.bind(this);
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

getType(event){
  const newType = event.currentTarget.value;
  this.setState({
    type:newType
  });
}

getInputValue(event){
  const gap = event.currentTarget.value;
  this.setState({
    gap: gap
  });
}

  render() {
    const {characters,gap,type} = this.state;
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
                  type = {type}
                  getType = {this.getType}
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
          
          
      </div>
    );
  }
}


export default App;
