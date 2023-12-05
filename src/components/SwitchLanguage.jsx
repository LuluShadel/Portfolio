import { useTranslation } from 'next-i18next';
import styles from '../style/_langue.module.scss';



const SwitchLangue = () =>  {
    const { i18n  } = useTranslation();
    const changeLanguage = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };
    return (
        <div className={styles['langue_main']} >
            <label htmlFor="langue-select">Langue :</label>

<select name="langue" id="langue-select" onChange={changeLanguage}>
  <option value="fr">Français</option>
  <option value="en">English</option>
  
</select>
     
        </div>
    )
}

export default SwitchLangue