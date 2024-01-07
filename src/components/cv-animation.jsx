
import styles from '../style/_cv-animation.module.scss';



const Cv_anim = () => {
    return(

<div className={styles['component']}>
				<ul className={styles['align']}>
					<li>
						<figure className={styles['book']}>

							

							<ul className={styles['hardcover_front']}>
								<li>
									<div className= {styles['coverDesign blue']}  >
										<p>Curriculum vitae</p>
										
									</div>
								</li>
								<li></li>
							</ul>

							

							<ul className={styles['page']}>
								<li></li>
								<li>
									<a className={styles['btn']} href="/CV_lucile.pdf" target='_blank'>Download</a>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>

							

							<ul className={styles['hardcover_back']}>
								<li></li>
								<li></li>
							</ul>
							<ul className={styles['book_spine']}>
								<li></li>
								<li></li>
							</ul>
							
						</figure>
					</li>
				</ul>
			</div>

)}

export default Cv_anim