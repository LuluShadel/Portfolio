import styles from '../style/_contact.module.scss';
import Image from 'next/image';
import mini_line from "../../public/mini_line.png";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin
 } from '@fortawesome/free-brands-svg-icons';

 import {
    faEnvelope
 } from '@fortawesome/free-regular-svg-icons'






const Contact = () => {
    return (
<div className={styles["background_contact"]}>
    

                <h3>Contact</h3>
                <div className={styles["ligne-orange"]}>
                <Image src={mini_line} alt='ligne orange' width={200} /> 
                </div>
<div className={styles["main_contact"]}>
    <div className={styles["main_contact--reseau"]}>
        <Link href="#">
        <div className={styles["card_reseau"]}>
        <FontAwesomeIcon icon={faEnvelope} className={styles["icon_contact"]}/>
            <p>
            Lucile.thieulin96@gmail.com
            </p>
        </div>
        </Link>
        <Link href="#">     
        <div className={styles["card_reseau"]}>
        <FontAwesomeIcon icon={faLinkedin} className={styles["icon_contact"]}  />     
        <p>
            Lien LinkedIn
            </p>
        </div>
        </Link>
    </div>
    <div className={styles["main_contact--form"]} >
        <p>Envie d&apos;en savoir plus? contactez moi</p>
        <form className={styles["formulaire"]}>
            <label htmlFor="nom">Nom </label>
            <input type='text' id='nom'></input>
            <label htmlFor="prenom">Prenom</label>
            <input type="text" id='prenom' />
            <label htmlFor="email">Email</label>
            <input type="email"id='email' />
            <label htmlFor="message">Message</label>
            <textarea id='message' rows="10" cols="33"></textarea>
            <div className={styles["btn_submit"]}>
<button type='subrmit'> Envoyer </button>
</div>
        </form>

    </div>


    </div>

</div>



    )} 


    export default Contact 