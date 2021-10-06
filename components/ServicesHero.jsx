import styles from '../styles/Home.module.css';
import ServicesHeroLayout from './ServicesHeroLayout'

function Hero() {
    return (
        <div className={styles.services__hero__image}>   
       <ServicesHeroLayout/>
        </div>
    )
}

export default Hero
