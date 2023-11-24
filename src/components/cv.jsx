import styles from '../style/_cv.module.scss';
import Image from 'next/image';
import mini_line from "../../public/mini_line.png";
import Link from 'next/link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-regular-svg-icons';







const CV = () => {



    return (
<div className={styles["main_cv"]}>
            
                <h3>CV</h3>
                <div>
                <Image src={mini_line} alt='ligne orange' width={200} className={styles["ligne-orange"]} />
                </div>
            <div className={styles["main_cv-contain"]}>
                <Link href="#">
            <FontAwesomeIcon icon={faFile} className={styles['cv_icon']} />
            </Link>
                <p>Pour tout connaître de mon parcours, télécharger mon Cv !</p>
            </div>
</div>
    )
}

export default CV