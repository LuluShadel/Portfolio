import styles from '../style/_contact.module.scss';
import Image from 'next/image';
import mini_line from "../../public/mini_line.png";


const Contact = () => {
    return (
<div className={styles["main_contact"]}>

                <h3>Contact</h3>
                <div className={styles["ligne-orange"]}>
                <Image src={mini_line} alt='ligne orange' width={200} /> 
                </div>


</div>



    )} 


    export default Contact 