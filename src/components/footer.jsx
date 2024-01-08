import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
   faEnvelope
} from '@fortawesome/free-regular-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import styles from '../style/_footer.module.scss';

import Link from "next/link";







const Footer = () => {
    return (
        <div className={styles['footer_main']}>
          <div className={styles['footer_reseau']}>
          <a href="/CV_lucile.pdf" target="_blank" className={styles['footer-link']}>
            <FontAwesomeIcon icon={faFile} className={styles['icon_contact']} />
           <p>CV</p> 
            </a>
            <Link href="mailto:lucile.thieulin96@gmail.com" className={styles['footer-link']}>
            <FontAwesomeIcon icon={faEnvelope} className={styles["icon_contact"]}/>
           <p>Mail</p>
            </Link>
            <Link href="https://www.linkedin.com/in/lucile-thieulin-46a445222" className={styles['footer-link']}>
            <FontAwesomeIcon icon={faLinkedin} className={styles["icon_contact"]}  />
            <p>LinkedIn</p>
            </Link>
            <Link href="https://github.com/LuluShadel"  className={styles['footer-link']}>
            <FontAwesomeIcon icon={faGithub} className={styles["icon_contact"]}  />
           <p>GitHub</p>
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} Lucile Portfolio
          </p>
        </div>
    )
  }
  
  export default Footer;