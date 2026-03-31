import styles from "./UserProfile.module.css"
function Movief(props) {
  return ( 
    <>
    <div className={styles.card}>
    <h1>{props.moviename}</h1>
        <h2>Director: {props.director}</h2>
      <h2>Release Date: {props.releaseyear}</h2>
      <h2>Rating: {props.genre}</h2>  
      </div>
    </>
  );
}
export default Movief;