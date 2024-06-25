import styles from './Objetivos.module.css';

export default function Objetivos() {

  return (
    <section>
      <h2>Nossos Objetivos</h2>
      <section className={styles.nossos_objetivos}>

        <ul className={styles.container_list}>
          <li>Morar juntos para eu fazer café para você todas as manhas ❤</li>
          <li>Ter uma família com 6 filhos e adotar um coreaninho ❤</li>
          <li>Você virar uma médica excelente e eu um ótimo programador ❤</li>
          <li>Te irritar até o fim das nossas vidas ❤</li>
          <li>Tentar te fazer a mulher mais feliz do mundo ❤</li>
          <li>Ajudar as pessoas que nos ajudaram pelo caminho ❤</li>
          <li>Conquistar muito dinheiro para viver tranquilamente ❤</li>
        </ul>
        
      </section>
    </section>
  )
}
