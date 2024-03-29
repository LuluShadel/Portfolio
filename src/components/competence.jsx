import styles from '../style/_competence.module.scss';
import Image from 'next/image';


import data from "../../public/data.json"

import mini_line from "../../public/mini_line.png"
import { useTranslation } from 'next-i18next';

const Competence = () => {

    const { t  } = useTranslation();

    return (
        <div  className={styles["main_competence"]} id='competence'>
            <div>
                <h3>{t("common:compet_title")}</h3>
                <div className={styles["ligne-orange"]}>
                <Image src={mini_line} alt='ligne orange' width={200} />
                </div>
            </div>
            <div className={styles["main_competence-logo"]}>
                {data.competence.map((competence,index)=>(
                    <div key={index} className={styles["competence_item"]}>
                    <Image
                      src={competence.logo}
                      alt={competence.name}
                      width={competence.width}
                      height={competence.height}
                      className={styles["competence_logo"]}
                    />
                    
                  </div>
                    
                ))}
            </div>
            <p> {t("common:compet_text")}</p>
        </div>
    )
}

export default Competence