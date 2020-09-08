import React from 'react';
import axios from 'axios';
// axios is like fetch()
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component{
    state = {
        isLoading: true,
        movies:[],
    };

    getMovies = async () => {
        const {
            data:{
                data:{movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        // console.log(movies);

        //{movies: movies}는 {movies}라고 쓸 수 있다. 이름이 서로 같으므로
        this.setState({movies, isLoading: false});    
    }

    componentDidMount(){
        //setTimeout(()=>{
        //    this.setState({isLoading: false});
        //}, 6000);
         this.getMovies();  
    }

    render(){
        const { isLoading, movies } = this.state;
        return (
        <section className="container">{isLoading? (<div className="loader"><span className="loader__text">'Loading...'</span>
        </div>
        ) : (
        <div className="movies">
            {movies.map((movie)=>(
                // console.log(movie);
                <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
            ))}
            </div>
        )}
        </section>
        );
    }
}

export default Home;