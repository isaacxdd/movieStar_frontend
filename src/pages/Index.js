import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const movie = useLoaderData();

  return (
    <div>
        <h2>Create a new movie </h2>
        <Form action="/create" method="post">
            <input type="text" name="Title" placeholder="Movie's title"/>
            <input type="text" name="Genres" placeholder="Movie's Genres"/>
            <input type="text" name="Release date" placeholder="Movie's Release date"/>
            <input type="text" name="Poster" placeholder="Movie's Poster"/>
            <input type="submit" value="Create a movie"/>
        </Form>
        
      {people.map((movie, index) => {
        return (
          <div key={movie._id} className="movie">
            <Link to={`/${movie._id}`}>
              <h1>{movie.tile}</h1>
            </Link>
            <img src={movie.image} alt={movie.name} />
             <h3>{movie.Genres}</h3>
            <h4>{movie.Releasedate}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Index;