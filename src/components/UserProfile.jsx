import styles from "./UserProfile.module.css"
import './../App.css'

function UserProfile(props) {
  
  
  return ( 
    <>
      <div className='styles.card'>
        <div className="PrefumePreviewImg">
        <img src={props.image} alt={props.Name} />
        </div>
        <div className="PrefumePreviewDesc">
        <p>{props.Name}</p>
        <p>{props.frangranceFamily}</p> 
        <p>{props.price} €</p>
        </div>
      </div> 
    </>
  );
};
export default UserProfile;
