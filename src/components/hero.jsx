
import styles from '../style/_hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Hero_anim from './hero-animation';

import photo from "../../public/photo-profil-portfolio.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons"

import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t  } = useTranslation();
  
  return (
    <div className={styles['hero-main']} id='Hero'>
        <div className={styles['hero']}>
        <Image src={photo} alt="photo de profil lucile" className={styles['img_profil']} />
          <div className={styles['hero_text']}>
          <Hero_anim />
            <p>{t('hero_text')}</p>
              <p><Link href="/#Contact" className={styles['link_contact']}>{t('common:hero_link')}</Link> {t('common:hero_link_text')} </p>
            
            <Link href="/#competence"><FontAwesomeIcon icon={faArrowDown} className={styles['hero_icon']} /></Link>
          </div>
          
        </div>
    
    </div>
  );
};

export default Hero;