

import Image from "next/image";
import styles from '../style/_header.module.scss';
import Link from "next/link";

import logo from "../../public/logo_git_hub.png"
import Line from "../../public/Line.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faLightbulb,
  faUser
} from "@fortawesome/free-regular-svg-icons"



const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['triangle-container']}>
      <div className={`${styles.triangle} ${styles.black}`}></div>
      <Link href="https://github.com/LuluShadel" >
          <Image src={logo} alt="GitHub" className={styles["triangle-gitHub"]} />
          </Link>
      </div>
      <div className={styles["title_container"]}>
          <h1>Lucile Thieulin Portfolio</h1>
          <Image src={Line} alt="ligne orange" className={styles["line"]} />
      </div>
      <div className={styles["navBar"]}>
        <Link className={styles["navBar_link"]} href="/#Hero">
        <FontAwesomeIcon icon={faUser} className={styles["navBar_icon"]}/>
          <p>About</p>
        </Link>
        <Link className={styles["navBar_link"]} href="/#Projets">
        <FontAwesomeIcon icon={faLightbulb} className={styles["navBar_icon"]}/>
          <p>Projets</p>
        </Link>
        <Link className={styles["navBar_link"]} href="/#Contact">
          <FontAwesomeIcon icon={faAt} className={styles["navBar_icon"]}/>
          <p>Contact</p>
        </Link>
      </div>
      
    </div>
  )
}

export default Header;