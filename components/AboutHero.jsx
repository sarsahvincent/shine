import styles from '../styles/Home.module.css';
import AboutHeroLayout from './AboutHeroLayout'

function Hero() {
    return (
        <div className={styles.about__hero__image}>   
       <AboutHeroLayout/>
        </div>
    )
}

export default Hero
