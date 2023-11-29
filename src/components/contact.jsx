import styles from '../style/_contact.module.scss';
import Image from 'next/image';
import mini_line from "../../public/mini_line.png";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin
 } from '@fortawesome/free-brands-svg-icons';

 import {
    faEnvelope
 } from '@fortawesome/free-regular-svg-icons';

 import {useForm} from "react-hook-form";





const Contact = () => {
// variables 
const {
  register,  // va permettre "d'enregistrer" 
   handleSubmit,  //recupère toutes les données une fois le btn cliqé 
  formState: { errors},  // va gerer les différentes erreurs 
}= useForm();




//methode 

const onSubmitHandler = data => {
  console.log(data);
}
   



    return (
<div className={styles["background_contact"]} id='Contact'>
    

                <h3>Contact</h3>
                <div className={styles["ligne-orange"]}>
                <Image src={mini_line} alt='ligne orange' width={200} /> 
                </div>
<div className={styles["main_contact"]}>
    <div className={styles["main_contact--reseau"]}>
    <Link href="mailto:lucile.thieulin96@gmail.com">
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
        <p>Une idée ? <br />Un projet ? <br />Une information ? <br /> N&apos;hesitez pas et contacter moi !</p>
        <form className={styles["formulaire"]} onSubmit={handleSubmit(onSubmitHandler)}>
            <label htmlFor="nom">Nom </label>
            <input 
            type='text' 
            id='nom'
            {...register("nom", {required : true})} 
            >    
            </input>
            {errors.nom && <small>Merci de renseigner votre nom</small>} 
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            id='email'
            {...register("email" , {required :true})}
            />
            {errors.email && <small>Merci de renseigner votre email que je puisse vous contactez</small>} 
            <label htmlFor="message">Message</label>
            <textarea 
            id='message' 
            rows="10" 
            cols="33"
            {...register ("contenu", {required:true})}
            
            ></textarea>
            {errors.contenu && <small>N&apos;hesitez pas à décrire votre projet, vos attentes ou la raison pour laquelle vous me contacter </small>} 
            <div className={styles["btn_submit"]}>
            <button type='submit' >
              Envoyer
            </button>
</div>
        </form>

    </div>


    </div>

</div>



    )} 


    export default Contact 