fetch('movies-list.json')
  .then((res) => res.json())
  .then((movieIds) => {
    movieIds.forEach((item) => {
      fetch(`movies/${item}.json`)
        .then((res) => res.json())
        .then((movie) => {
          const div = document.createElement('div');
          div.innerHTML = `<h2>${movie.movie}</h2>
                          <p>${movie.rating.stars}</p>
                          <p>${movie.rating.ratingAmount}</p>
                          <p>${movie.release}</p>
                          <p>${movie.description}</p>
                          <p>${movie.genres}</p>
                          <p>${movie.director}</p>
                          <p>${movie.lead}</p>`;
          document.body.append(div);
        });
    });
  });