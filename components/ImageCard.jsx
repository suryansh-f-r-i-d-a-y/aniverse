'use client'
import styles from '../app/styles/card.module.css'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from 'next/link';

export default function ImageCard({ image, title, id }) {
  // console.log(image);
  return (
    <Link href={`animeinfo/${id}`}>
    <div className={styles.cardContainer}>
      <div className={styles.image} style={{ backgroundImage: `url('${image}')` }}>  
      </div>
     <div className={styles.cardDesc}></div>
      <a className={styles.title}>{title}</a>
    </div>
    </Link>
  );
}


{/* <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <AddRoundedIcon style={{ fill: 'white' }} />
          </button>
        </div> */}