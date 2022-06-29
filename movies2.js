fetch('movies-list.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // moviesList.map((movieId) => {
        //     console.log(movieId);
        // })
    })