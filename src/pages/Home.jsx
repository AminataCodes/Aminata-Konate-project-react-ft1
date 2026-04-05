import UserProfile from './../components/UserProfile'
import Movief from './../components/Movief'
import { useState } from 'react'
import image1 from './../Images/image1.png'
import image2 from './../Images/image2.png'
import image3 from './../Images/image3.png'
import image4 from './../Images/image4.png'
import './../App.css'
import { useNavigate } from 'react-router';


function Home() {
  const navigate = useNavigate();
  
  
  const users = [{
    image : image1,
    Name : "Source of Air",
    frangranceFamily: "Aquatic",
    price: 50,
  }, 
  {
    image : image2,
    Name : "Forest Spirit",
    frangranceFamily: "Woody",
    price: 50,
  }, 
  {
    image : image3,
    Name : "Sounds of life",
    frangranceFamily: "Floral",
    price: 50,
  },
  {
    image : image4,
    Name : "Begginning of time",
    frangranceFamily: "Oriental",
    price: 50,
  }];
  return (
    <>
      <div className='brief'>
      <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/l/u/LUMO-farmer-and-domitilah.jpeg?crop=0%2C0%2C1801%2C1351&wid=300&hei=225&scl=6.004444444444444" alt="a picture of biodiversity" />
      <div className='brief-text'>
      <p>A BRAND LIKE NO OTHER</p>
      <p>Discover the sacred scents of Africa</p>
      <p>A 100% african ingredients</p>
      <button onClick={() => navigate("/About")}>Learn More</button>
      </div>
      </div>
        <div className='title'>
      <p>Our best sellers</p>
        </div>
      <div className="users">
        {
       users.map((perfume, id) => (
        <UserProfile
        key={id}
        image={perfume.image}
        Name={perfume.Name}
        frangranceFamily={perfume.frangranceFamily}
        price={perfume.price}
      />
      ))
        }
      </div>
    
    </>
  );
}

export default Home;