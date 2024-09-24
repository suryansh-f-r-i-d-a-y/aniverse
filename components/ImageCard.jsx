'use client'
import styles from '../app/styles/card.module.css'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from 'next/link';

export default function ImageCard({ image, title, id }) {
  return (
    <Link href={`animeinfo/${id}`} className={styles.cardLink}>
      <div className={styles.cardContainer}>
        <div className={styles.image} style={{ backgroundImage: `url('${image}')` }}></div>
        <div className={styles.cardDesc}></div>
        <span className={styles.title}>{title}</span>
      </div>
    </Link>
  );
}


{/* <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <AddRoundedIcon style={{ fill: 'white' }} />
          </button>
        </div> */}