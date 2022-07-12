fetch('movies-list.json')
  .then((res) => res.json())
  .then((data) => {
    data.map(movieId => {
      fetch(`.movies/${movieId}.json`)
    })
  });
