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
          <Link href="#">
            <FontAwesomeIcon icon={faFile} className={styles['icon_contact']} />
            </Link>
            <Link href="mailto:lucile.thieulin96@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles["icon_contact"]}/>
            </Link>
            <Link href="#">
            <FontAwesomeIcon icon={faLinkedin} className={styles["icon_contact"]}  />
            </Link>
            <Link href="https://github.com/LuluShadel" >
            <FontAwesomeIcon icon={faGithub} className={styles["icon_contact"]}  />
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} Lucile Portfolio
          </p>
        </div>
    )
  }
  
  export default Footer;