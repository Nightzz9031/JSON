fetch('movies.json')
    .then(res => res.json())
    .then(movies => {
        let moviesList = document.querySelector('#movies-list');

        movies.map((movie) => {
            console.log(movie);
            console.log(movie.movie);
            console.log(movie.release);

            let movieItem = document.createElement('div');
            movieItem.innerHTML = `<h1>${movie.movie}</h1>
                                    <img src="${movie.img}">
                                   <ul>
                                    <li><strong>Release year:</strong> ${movie.release}</li>
                                    <li><strong>Rating:</strong> ${movie.rating.stars}/10 with ${movie.rating.ratingAmount} votes</li>
                                    <li><strong>Director(-s):</strong> ${movie.director}</li>
                                    <li><strong>Genres:</strong> ${movie.genres}
                                    <li><strong>Lead actors:</strong> ${movie.lead}</li>
                                   </ul>
                                   <p>${movie.description}</p>`

            moviesList.append(movieItem);   
    })
})

