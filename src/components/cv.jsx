import styles from '../style/_cv.module.scss';
import Image from 'next/image';
import mini_line from "../../public/mini_line.png";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-regular-svg-icons';



import { useTranslation } from 'next-i18next';




const CV = () => {

    const { t  } = useTranslation();


    return (
<div className={styles["main_cv"]}>
            
                <h3>CV</h3>
                <div className={styles["ligne-orange"]}>
                <Image src={mini_line} alt='ligne orange' width={200}  />
                </div>
            <div className={styles["main_cv-contain"]}>
            <a href="/CV_lucile_THIEULIN.pdf" >
                    
            <FontAwesomeIcon icon={faFile} className={styles['cv_icon']} />
            </a>
            
                <p>{t("common:cv_text")}</p>
            </div>
</div>
    )
}

export default CV