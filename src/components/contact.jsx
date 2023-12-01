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



 import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';
 import { useState } from 'react';



// utilisation de EmailJS pour l'envoi des mails en front-end


const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if (!formData.user_name || !formData.user_email || !formData.message) {
        setError('Veuillez remplir tous les champs, que je puisse vous re-contacter.');
        return;
    }



      setFormData({
        user_name: '',
        user_email: '',
        message: ''
    });
  
      emailjs.sendForm(
        'service_ght4qgs',
         'template_qwagtfm',
          form.current,
           'K40SqVeyLBYr6Q6g3')
        .then((result) => {
            console.log(result.text);
            setSucces("Votre message à bien été envoyé. je reviendrais vite vers vous ! ")
            setError('')
        }, (error) => {
            console.log(error.text);
            setError('Une erreur s\'est produite lors de l\'envoi du formulaire.');
            setSucces("")
        });
    };


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
        <form className={styles["formulaire"]} ref={form} onSubmit={sendEmail}>
            <label htmlFor="nom">Nom </label>
            <input 
            type='text' 
            id='nom'
            name="user_name"
            value={formData.user_name}
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
             
            >    
            </input>
            
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            id='email'
            name="user_email"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            
            />
            
            <label htmlFor="message">Message</label>
            <textarea 
            id='message' 
            rows="10" 
            cols="33"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            
            
            ></textarea>
{succes && <p style={{ color: 'green' }}>{succes}</p> }
{error && <p style={{ color: 'red' }}>{error}</p>}
            
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