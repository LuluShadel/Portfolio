import styles from '../style/_competence.module.scss';
import Image from 'next/image';


import data from "../../public/data.json"

import mini_line from "../../public/mini_line.png"

const Competence = () => {

   

    return (
        <div  className={styles["main_competence"]}>
            <div>
                <h3>Compétences</h3>
                <div className={styles["ligne-orange"]}>
                <Image src={mini_line} alt='ligne orange' width={200} />
                </div>
            </div>
            <div className={styles["main_competence-logo"]}>
                {data.competence.map((competence,index)=>(
                    <Image 
                    key={index} 
                    src={competence.logo} 
                    alt={competence.name}
                    width={competence.width}
                    height={competence.height}
                    className={styles["competence_logo"]} 
                    />
                ))}
            </div>
            <p> D&apos;autres compétences à venir  ! </p>
        </div>
    )
}

export default Competence