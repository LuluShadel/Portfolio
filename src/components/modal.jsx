import styles from '../style/_modal.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark
 } from '@fortawesome/free-solid-svg-icons';

 import logo_git from "../../public/github_logo.png";
 import logo_lien from "../../public/logo_lien.png";

 import Image from 'next/image';
 import Link from 'next/link';

 import { useTranslation } from 'next-i18next';

 


const Modal = ({projet,onClose}) => { 
    console.log(projet)
    const { t  } = useTranslation("");
    return (
        <div className={styles['modal-main']}>
            <div className={styles["modal-content"]}>
                
            
            
                <div className={styles["bandeau"]} >
                    <Image src={projet.bandeau} alt='img du projet' width={1500}  height={300} className={styles["bandeau-img"]}/>
                </div>
                <div className={styles["modal_header"]}>
                 
                <FontAwesomeIcon icon={faXmark} className={styles["close"]} onClick={onClose}/>
                </div>
                <div className={styles["text_and_link"]}>
                <div className={styles["modal-content-text"]}>

                    <h2>{t(`projet.${projet.id}.titre`)}</h2>
                    
                    <p className={styles["text"]}>{t(`projet.${projet.id}.description`)}
                    </p>
                    <div className={styles["competence-list"]} >
                        {projet.competence.map((competence,index)=>(
                        <div key={index} className={styles["tag"]} >{competence}</div>
                        ))}
                        </div>
                    
                    
                </div>
                <div className={styles["projet_link"]} >
                <Link href={projet.lienGitHub} target="_blank" className={styles["projet_link-only"]}>
                    <Image src={logo_git} alt='logo github' height={80} width={80} className={styles["projet_link-img"]}  />
                    <p>{t('modal-lien-git')}</p>
                    
                    </Link>
                    <div>
                    {projet.lienSite && (
                    <Link href={projet.lienSite} target="_blank" className={styles["projet_link-only"]}>
                    <Image src={logo_lien} alt='logo Lien' height={80} width={80} className={styles["projet_link-img"]} />
                    <p>{t('modal-lien-site')}</p>
                    </Link>
                    )}
                    </div>
                </div>

                </div>
                

            
            </div>
        </div>
    )
}

export default Modal 