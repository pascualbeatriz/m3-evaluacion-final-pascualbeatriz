const url = 'https://rickandmortyapi.com/api/character/';


const getUrlData = () => {
  return (
    fetch(url)
    .then (response => response.json())
  );
};


export {getUrlData};

  