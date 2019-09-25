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
      gender:'all'
    }
    this.getInputValue = this.getInputValue.bind(this);
    this.getGender = this.getGender.bind(this);
  }

componentDidMount (){
  this.getUrl();
  // getLocalStorage();
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

getGender(event) {
  const newGender = event.currentTarget.value;
  console.log(newGender);
  this.setState({
    gender: newGender
  });
}


// getGender(event) {
//   const genderResult = event.currentTarget.value;
//   this.setState(prevState => {
//     const newGender = {
//       ...prevState.gender,
//       gender:genderResult
//     };
//     localStorage.setItem('lsgetGender', JSON.stringify(newGender));
    
//     return {
//       gender:genderResult
//     };
//   });
// }

// getLocalStorage() {
//   const ls = JSON.parse(localStorage.getItem('lsgetGender'));
//   if (ls !== null) {
//     this.setState({
//       characters: ls
//     });
//   }
// }


  render() {
    const {characters,gap,gender} = this.state;
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
