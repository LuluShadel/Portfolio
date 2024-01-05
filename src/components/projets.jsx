import data from "../../public/data.json";
import styles from "../style/_projets.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import mini_line from "../../public/mini_line.png";

import Modal from "./modal";
import { useTranslation } from 'next-i18next';

const Projets = () => {
  const { t } = useTranslation();

  const [projetsVisibles, setProjetsVisibles] = useState(3);
  const [afficherTousLesProjets, setAfficherTousLesProjets] = useState(false);
  const [projetFiltre, setProjetFiltre] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projetSelectionne, setProjetSelectionne] = useState(null);
  const [filtreProjet, setFiltreProjet] = useState('tous'); // Ajout de l'état filtreProjet

  const handleVoirPlus = () => {
    setProjetsVisibles(data.projets.length);
    setAfficherTousLesProjets(true);
  };

  const handleVoirMoins = () => {
    setProjetsVisibles(3);
    setAfficherTousLesProjets(false);
  };

  const handleModalOpen = (projet) => {
    setModalIsOpen(true);
    setProjetSelectionne(projet);
  };

  const handleModalClosed = () => {
    setModalIsOpen(false);
  };

  function filter(projetType) {
    const projetFiltres = data.projets.filter((projet) => {
      if (projetType === 'tous') {
        return true; // Retourne tous les projets si le filtre est "tous"
      } else {
        return Array.isArray(projet.categorie)
          ? projet.categorie.includes(projetType)
          : projet.categorie === projetType;
      }
    });
    setProjetFiltre(projetFiltres);
  }

  useEffect(() => {
    setProjetFiltre(data.projets);
  }, []);

  function handleFiltre(e) {
    let typeProjet = e.target.value;
    setFiltreProjet(typeProjet);
    typeProjet !== "tous" ? filter(typeProjet) : setProjetFiltre(data.projets);
  }

  return (
    <div className={styles["main_projets"]} id="Projets">
      <div className={styles["main_projets-div"]}>
        <h3>{t("common:projet_title")}</h3>
        <div>
          <Image src={mini_line} alt="ligne orange" width={200} className={styles["ligne-orange"]} />
        </div>
        <p>{t("common:projet_text")} </p>
        <div className={styles["main_projet-div-filtres"]}>
          <button onClick={handleFiltre} value={"tous"}>{t('common:btn-tous')}</button>
          <button onClick={handleFiltre} value={"HTML/CSS"}>HTML/CSS</button>
          <button onClick={handleFiltre} value={"Javascript"}>Javascript</button>
          <button onClick={handleFiltre} value={"React"}>React</button>
          <button onClick={handleFiltre} value={"Optimisation"}>Optimisation</button>
          <button onClick={handleFiltre} value={"Debug"}>Debug</button>
        </div>
        <div className={styles["main_projet-div-projets"]}>
          {projetFiltre &&
            projetFiltre.slice(0, projetsVisibles).map((projet, index) => (
              <div key={index} onClick={() => handleModalOpen(projet)} className={styles["main_projet-div"]}>
                <Image
                  key={index}
                  src={projet.cover}
                  alt={projet.title}
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
            {afficherTousLesProjets ? <p> {t("common:btn-moins")} </p> : <p>{t("common:btn-plus")} </p>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Projets;
