import data from "../../public/data.json"
import styles from "../style/_projets.module.scss"
import Image from "next/image"
import { useState } from "react"

import mini_line from "../../public/mini_line.png"






const Projets = () => {

    const [projetsVisibles, setProjetsVisibles] = useState(3);
    const [afficherTousLesProjets, setAfficherTousLesProjets] = useState(false);

    const handleVoirPlus = () => {
        setProjetsVisibles(data.projets.length);
        setAfficherTousLesProjets(true);
      };;

      const handleVoirMoins = () => {
        setProjetsVisibles(3);
        setAfficherTousLesProjets(false);
      };

    return (
        <div className={styles["main_projets"]}>
            <div className={styles["main_projets-div"]}>
                <h3>Projets</h3>
                <div>
                <Image src={mini_line} alt='ligne orange' width={400} className={styles["ligne-orange"]}/>
                </div>
            <p>Tout au long de ma formation j’ai efféctués différents projets mais j’ai egalement commencer des projets personelles afin de me former sur d’autres languages </p>
            <div className={styles["main_projet-div-filtres"]} >
                <button>HTML/CSS</button>
                <button>Javascript</button>
                <button>React</button>
            </div>
            <div className={styles["main_projet-div-projets"]}>
            {data.projets.slice(0, projetsVisibles).map((projet, index) => (
            <Image 
            key={index} 
            src={projet.cover} 
            alt="projets" 
            width={projet.width}
            height={projet.height}
            className={styles["projet"]}/>
                ))}
            </div>
            {data.projets.length > 3 && (
          <button onClick={afficherTousLesProjets ? handleVoirMoins : handleVoirPlus} className={styles["button-plus-moins"]}>
            {afficherTousLesProjets ? 'Voir moins' : 'Voir plus'}
          </button>
        )}
            
            </div>
        </div>

    )
}

export default Projets