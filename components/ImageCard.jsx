import styles from '../app/styles/card.module.css'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
export default function ImageCard({key ,image , title }) {


  // console.log(image);

  return (
<div className={styles.cardContainer}>
    <div  className={styles.main} style={{ backgroundImage: `url('${image}')` }}>
    <div className={styles.buttonWrapper}>
    <button className={styles.button}>
      <AddRoundedIcon style={{fill:'white'}}/>
    </button>
      </div>
  </div>
  <span>{title}</span>
  </div>
  );
}