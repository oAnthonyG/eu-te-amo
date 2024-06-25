
import InicioParagrafo from '../components/texts';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <section>
      <h1 className={styles.titleInicio}>𝓜𝓲𝓷𝓱𝓪 𝓔𝓼𝓹𝓸𝓼𝓪 𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓪 </h1>
      <div className={styles.inicioParagrafo}>
        <InicioParagrafo />
      </div>
    </section>
  )
}


export default Inicio;