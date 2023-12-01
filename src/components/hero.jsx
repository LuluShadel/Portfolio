
import styles from '../style/_hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import photo from "../../public/lucile_thieulin.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  
  return (
    <div className={styles['hero-main']} id='Hero'>
      <div className={styles['fancy']}>
        <div className={styles['hero-after']}>
        <Image src={photo} alt="photo de profil lucile" className={styles['img_profil']} />
          <div className={styles['hero_text']}>
          <h2>Bonjour, Lucile developpeur Web</h2>
            <p>
              Toujours à la recherche de nouveau challenge j&apos;ai débuté par l&apos;apprentissage de Javascript mais j&apos;ai très vite éprouvé un grand intérêt pour React et j&apos;ai donc obtenu mon diplôme de developpeur web cependant je ne compte pas m&apos;arrêter la ! Concevoir un site, partant de quelques idées sur un morceau de papier puis faire des maquettes pour enfin le voir prendre forme réelement est un vrai plaisir. J&apos;aime ajouter des petits détails pour faire de chaques sites une pièce unique.
              </p>
              <p><Link href="/#Contact" className={styles['link_contact']}>Contactez-moi</Link> et parlons de votre projet ! </p>
            
            <FontAwesomeIcon icon={faArrowDown} className={styles['hero_icon']} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;