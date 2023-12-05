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
                <div className={styles["text"]}>
                    <h3>{t("common:modal-qui")} </h3>
                    <p>{t(`projet.${projet.id}.client`)}
                    </p>
                </div>
                <div className={styles["text"]}>
                <p>{t(`projet.${projet.id}.description`)}
                    </p>
                    <h3 className={styles["margin-left"]}>{t("common:modal-description")}</h3>
                </div>
                <div className={styles["text"]}>
                    <h3>{t("common:modal-objectif")}</h3>
                    <p>{t(`projet.${projet.id}.objectif`)}
                    </p>
                </div>
                </div>
                <div className={styles["projet_link"]} >
                <Link href={projet.lienGitHub} className={styles["projet_link-only"]}>
                    <Image src={logo_git} alt='logo github' height={80} width={80} className={styles["projet_link-img"]}  />
                    <p>{t('modal-lien-git')}</p>
                    </Link>
                    <div>
                    {projet.lienSite && (
                    <Link href={projet.lienSite} className={styles["projet_link-only"]}>
                    <Image src={logo_lien} alt='logo Lien' height={80} width={80} className={styles["projet_link-img"]} />
                    <p>{t('modal-lien-site')}</p>
                    </Link>
                    )}
                    </div>
                </div>

                </div>
                <div className={styles["section_tag"]} >
                
                <div className={styles["tag_contain"]}>
                {projet.tag.map((tag,index)=> (
                    
                    <div key={index} className={styles["tag"]} >
                        <Image src={tag.cover} alt='logo language utilisé'width={50} height={50} className={styles["tag_img"]}  />
                    <span>{tag.name}</span>
                    </div>
                ))}
                </div>
                </div>

            
            </div>
        </div>
    )
}

export default Modal 