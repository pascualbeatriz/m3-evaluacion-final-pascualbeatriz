const url = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';
// 'https://rickandmortyapi.com/api/character/';


const getUrlData = () => {
  return (
    fetch(url)
    .then (response => response.json())
  );
};


export {getUrlData};

  