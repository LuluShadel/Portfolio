import { useTranslation } from 'next-i18next';
import styles from '../style/_hero-anim.module.scss';

const Hero_anim = () => {
    const { t  } = useTranslation();
    return (
        <div className={styles['hero-anim_main']} >
            <div className={styles['hero-anim_div']}>{t('hero_title1')}</div> 
               <div className={styles['hero-anim_div']}> 
                    <span>{t('hero_title2')}</span>
               </div> 
        </div>
    )


}

export default Hero_anim