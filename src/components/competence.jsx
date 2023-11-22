import styles from '../style/_competence.module.scss';
import Image from 'next/image';

import data from "../../public/data.json"

import mini_line from "../../public/mini_line.png"

const Competence = () => {
    return (
        <div className={styles["main_competence"]}>
            <div className={styles["main_competence-title"]}>
                <h3>Compétences</h3>
                <Image src={mini_line} alt='ligne orange' className={styles["main_competence-ligne"]}/>
            </div>
            <div className={styles["main_competence-logo"]}>
                {data.competence.map((competence,index)=>(
                    <Image 
                    key={index} 
                    src={competence.logo} 
                    alt={competence.name}
                    width={competence.width}
                    height={competence.height} />
                ))}
            </div>
            <p> D&apos;autres compétences à venir  ! </p>
        </div>
    )
}

export default Competence