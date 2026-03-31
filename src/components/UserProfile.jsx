import styles from "./UserProfile.module.css"

function UserProfile(props) {
  
  return ( 
    <>
      <div className={styles.card}>
      
    <h1>{props.Name} {props.lastname}</h1>
      <h2>Date of Birth: {props.Dateofbirth}</h2>
      <h2>Je suis actuellement en {props.classe}</h2> 
      </div> 
    </>
  );
}
<script>
  const darkmode = document.querySelector('body');
    darkmode.classList.toggle('dark-mode');

</script>
export default UserProfile;
