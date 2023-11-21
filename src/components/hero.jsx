
import styles from '../style/_hero.module.scss';
import Image from 'next/image';

import photo from "../../public/lucile_thieulin.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  
  return (
    <div className={styles['hero-main']}>
      <div className={styles['fancy']}>
        <div className={styles['hero-after']}>
        <Image src={photo} alt="photo de profil lucile" className={styles['img_profil']} />
          <div className={styles['hero_text']}>
          <h2>Bonjour, Lucile developpeur Web</h2>
            <p>
              En reconversion professionnelle après avoir travaillé le commerce, je me suis tourné vers le développement web. Ayant soif d’apprendre toujours plus, ce milieu me semble tout indiqué. Diplômée cette année, je ne compte pas m’arrêter là et développer toujours plus mes compétences.
            </p>
            <FontAwesomeIcon icon={faArrowDown} className={styles['hero_icon']} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;