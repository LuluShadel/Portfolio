import data from "../../public/data.json";
import styles from "../style/_projets.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import mini_line from "../../public/mini_line.png";

import Modal from "./modal";

const Projets = () => {
  const [projetsVisibles, setProjetsVisibles] = useState(3);
  const [afficherTousLesProjets, setAfficherTousLesProjets] = useState(false);
  const [projetFiltre, setProjetFiltre] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [projetSelectionne, setProjetSelectionne] = useState(null)

  const handleVoirPlus = () => {
    setProjetsVisibles(data.projets.length);
    setAfficherTousLesProjets(true);
  };

  const handleVoirMoins = () => {
    setProjetsVisibles(3);
    setAfficherTousLesProjets(false);
  };

  const handleModalOpen = (projet) => {
    setModalIsOpen(true)
    setProjetSelectionne(projet)
  }

  const handleModalClosed = () => {
    setModalIsOpen(false)
  }


  function filter(projetType) {
    const projetFiltres = data.projets.filter((type) => type.categorie === projetType);
    setProjetFiltre(projetFiltres);
  }

  useEffect(() => {
   
    setProjetFiltre(data.projets);
  }, []);

  function handleFiltre(e) {
    let typeProjet = e.target.value;
   
    typeProjet !== "tous" ? filter(typeProjet) : setProjetFiltre(data.projets);
  }

  return (
    <div className={styles["main_projets"]} id="Projets">
      <div className={styles["main_projets-div"]}>
        <h3>Projets</h3>
        <div>
          <Image src={mini_line} alt="ligne orange" width={200} className={styles["ligne-orange"]} />
        </div>
        <p>
          Voici mes projets réalisés à ce jour, et ceux en cours de réalisation. Retrouver le lien vers le site ou bien le gitHub pour en apprendre plus sur chaques projets.  
        </p>
        <div className={styles["main_projet-div-filtres"]}>
            <button onClick={handleFiltre} value={"tous"} >Tous</button>
          <button onClick={handleFiltre} value={"HTML/CSS"}>
            HTML/CSS
          </button>
          <button onClick={handleFiltre} value={"Javascript"}>Javascript</button>
          <button onClick={handleFiltre} value={"React"}>React</button>
        </div>
        <div className={styles["main_projet-div-projets"]}>
          {projetFiltre &&
            projetFiltre.slice(0, projetsVisibles).map((projet, index) => (
              <div key={index} onClick={() => handleModalOpen(projet)}>
              <Image
                key={index}
                src={projet.cover}
                alt="projets"
                width={projet.width}
                height={projet.height}
                className={styles["projet"]}
              />
              </div>
            ))}
            {modalIsOpen && (
        <Modal
          projet={projetSelectionne}
          onClose={handleModalClosed}
        />
      )}
        </div>
        {data.projets.length > 3 && (
          <button onClick={afficherTousLesProjets ? handleVoirMoins : handleVoirPlus} className={styles["button-plus-moins"]}>
            {afficherTousLesProjets ? 'Voir moins' : 'Voir plus'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Projets;