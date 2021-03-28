import {useState} from 'react'
import './App.css';
import AddMovie from './componenets/addmovie/AddMovie';
import MovieList from './componenets/MovieList/MovieList';
import {moviesData} from './componenets/MoviesData'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componenets/BavBar/NavBar';
function App() {
  const [movie,setMovie] = useState(moviesData)
  const [ratingSearch,setRatingSearch] = useState("")
  const [name,setName] = useState("")
  console.log("movies" , movie)
  const Addfilm =(newmovie)=>{
    return setMovie([...movie , newmovie])
  }
  return (
    <div className="App">
      <NavBar ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} name={name} setName={setName} />
     <MovieList movie={movie} ratingSearch={ratingSearch}  name={name} />
     <AddMovie  Addfilm={Addfilm}/>
    </div>
  );
}

export default App;
