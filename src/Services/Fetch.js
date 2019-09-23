const url = 'https://rickandmortyapi.com/api/character/';
// 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const getUrlData = () => {
  return (
    fetch(url)
    .then (response => response.json())
  );
};


export {getUrlData};

  