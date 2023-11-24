import styles from '../style/_competence.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import data from "../../public/data.json"

import mini_line from "../../public/mini_line.png"

const Competence = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, 
      });

    return (
        <div ref={ref} className={styles["main_competence"]}>
            <div>
                <h3>Compétences</h3>
                <div>
                <Image src={mini_line} alt='ligne orange' width={400} className={styles["ligne-orange"]} />
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
                    className={`${styles["competence_logo"]} ${inView ? styles["in-view"] : ''}`}
                    />
                ))}
            </div>
            <p> D&apos;autres compétences à venir  ! </p>
        </div>
    )
}

export default Competence