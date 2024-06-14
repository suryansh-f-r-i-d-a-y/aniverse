import styles from '../app/styles/card.module.css'
export default function ImageCard({image}) {

  // console.log(image);

  return (

    <div  className={styles.main} style={{ backgroundImage: `url('${image}')` }}>
    <div className={styles.buttonWrapper}>
    <button className={styles.button}>
      1
    </button>
    <button className={styles.button}>
      2
    </button>
    <button className={styles.button}>
      3
    </button>
      </div>
  </div>
  );
}