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
      characters:data.results
    });
  });
}

  render() {
    
    return (
      <div className="app">
        <h1 className="app__tittle">titulo, aqui va el logo</h1>
        <ul className="characters__list">
        {this.state.characters.map(characterList => {
          return(
            <li className="character__List" key={characterList.id}>
              <div className="character__List-container">
                <h2 className="character__List-name">{characterList.name}</h2>
                <div className="character__img-container">
                  <img src={characterList.image} alt={`imagen de ${characterList.name}`} className="character__img"/>
                </div>
                <p className="character__species">{characterList.species}</p>
              </div>
            </li>
          );
        })}
        </ul>       
      </div>
    );
  }
}

export default App;
