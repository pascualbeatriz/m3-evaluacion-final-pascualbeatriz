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
      gender:'',
      location:''
    }
    this.getInputValue = this.getInputValue.bind(this);
    this.getGender = this.getGender.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

componentDidMount (){
  this.getUrl();
  this.getLocalStorage();
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

getLocation(event) {
  const newLocation = event.currentTarget.value;
  this.setState({
    location: newLocation
  });
}


getGender(event) {
  const newGender = event.currentTarget.value;
    this.setState({
      gender: newGender
    });

    localStorage.setItem('lsgetGender', JSON.stringify(newGender));
}

getLocalStorage() {
  const ls = JSON.parse(localStorage.getItem('lsgetGender'));
  if (ls !== null) {
    this.setState({
      gender: ls
    });
  }
}


  render() {
    const {characters,gap,gender,location} = this.state;
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
                  gender = {gender}
                  getGender = {this.getGender}
                  location = {location}
                  getLocation = {this.getLocation}
                />   
              );
            }}
            />
            <Route path="/character_detail/:id" render = { (routerProps) => {
              return(
                <CharacterDetail 
                  routerProps = {routerProps}
                  characters = {characters}
                  gender = {gender}
                  location = {location}
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
