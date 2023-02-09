import Movie from './Movie';


const MoviesList = (props) => {
    return (
        <ul className={['movies-List']}>
        {props.movies.map((movie) =>(
            <Movie
                title={movie.releses}
                openingText={movie.openingText}
            />

        ))}
        </ul>
    );
};

export default Movie;

