import UserProfile from './../components/UserProfile'
import Movief from './../components/Movief'
import { useState } from 'react'


function Home() {
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
    <div>
      <div className='promo'>
        <p>Most unique perfumes of the market !</p>
      </div>
      <div className='Sales'>
        <p>Don't miss our wild April sales get 30% off your entire cart</p>
      </div>
      <div className='brief'>
      <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/l/u/LUMO-farmer-and-domitilah.jpeg?crop=0%2C0%2C1801%2C1351&wid=300&hei=225&scl=6.004444444444444" alt="a picture of biodiversity" />
      <div className='brief-text'>
      <p>A BRAND LIKE NO OTHER</p>
      <p>Discover the sacred scents of Africa</p>
      <p>A 100% african ingredients</p>
      </div>
      </div>
        
      <div className="users">
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
    </div>
  );
}
export default Home;