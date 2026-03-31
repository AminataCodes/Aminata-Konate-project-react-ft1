import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/UserProfile'
import Movief from './components/Movief'

function App() {
    
  const [counter, setCounter] = useState(0);  

  const users = [{
    Name :"Aminata",
    lastname : "Konate",
    Dateofbirth : "01/01/2000",
    classe : "1ère année",
  },
  {
    Name :"Moussa",
    lastname : "Coulibaly",
    Dateofbirth : "02/02/2000",
    classe : "2ème année",        
  },
  {
    Name :"Fatoumata",
    lastname : "Diallo",
    Dateofbirth : "03/03/2000",
    classe : "3ème année",        
  },
  {
    Name :"Abdou",
    lastname : "Traore",
    Dateofbirth : "04/04/2000",
    classe : "4ème année",        
  }];
  const [showUsers, setShowUsers] = useState(true); 

  const movies = [{
    moviename :"The Shawshank Redemption",
    director : "Frank Darabont",
    releaseyear : "1994",
    genre : "Drama",
  },
  {
    moviename :"The Godfather",
    director : "Francis Ford Coppola",
    releaseyear : "1972",
    genre : "Crime",        
  },
  {
    moviename :"The Dark Knight",
    director : "Christopher Nolan",
    releaseyear : "2008",
    genre : "Action",        
  },
  {
    moviename :"Pulp Fiction",
    director : "Quentin Tarantino",
    releaseyear : "1994",
    genre : "Crime",  

  } ]; 

  return (
    <>
    <div className="test">
      <h1>Test section</h1>

      <div className='countx'>
      <button 
      onClick={() => {setCounter(counter + 1)}}>
        Add
        </button>
        <h2> {counter} </h2>
        <button onClick ={() => {setCounter(counter - 1)}}>
        Subtract
        </button>
      </div>
      <h1 className="title">User List</h1>
        <button 
        onClick={() => {setShowUsers(!showUsers)}}>
        {showUsers ? "Hide Users" : "Show Users"}
        </button>
      
        {
      showUsers &&users.map((user, id) => (
        <UserProfile 
        key={id}
        Name={user.Name}
        lastname={user.lastname}
        Dateofbirth={user.Dateofbirth}
        classe={user.classe}
      />
      ))
    }
    </div>

    <div className="test">
      <h1 className="title">Movies List</h1>
      {
      movies.map((movie, id) => (
        <Movief 
        key={id}
        moviename={movie.moviename}
        director={movie.director}
        releaseyear={movie.releaseyear}
        genre={movie.genre}
      />
      ))
    }
    </div>
    </>
  )
}

export default App
