import { useState } from 'react';
import styles from './Musicas.module.css';

function Musicas() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const handleClick = (pageNumber) => {
    setPaginaAtual(pageNumber)
  }
  const renderizarMusicas = () => {
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina
    return (
      <section className={styles.wrapper_musicas}>
        {musicas.slice(inicio, fim).map((musica, index) => (
          <div key={index} className={styles.container_img}>
            <iframe src={musica.videoSrc}
              title={musica.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className={styles.containerText}>
              <h3>{musica.titulo}</h3>
              <p>{musica.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    )
  }
  const renderizarBotoes = () => {
    const numeroDePaginas = Math.ceil(musicas.length / itensPorPagina);
    const botoes = [];
    for (let i = 1; i <= numeroDePaginas; i++) {
      botoes.push(
        <button className={styles.musicaButton} key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      );
    }
    return botoes;
  };

  return (
    <section>
      <h2>Dedico Todas Essas Músicas a Você</h2>
      {renderizarMusicas()}
      <div className={styles.containerButton}>
        {renderizarBotoes()}
      </div>
    </section>
  )
}

const musicas = [
  {
    titulo: "정국 (Jung Kook) 'Seven' (feat. Latto)",
    descricao: 'Voce se envolve em minha vida e me da vida e é por isso que noite após noite eu vou te amar direito, Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo. 7 dias por semana a cada hora, a cada minuto a cada segundo eu ainda estarei amando voce direito. ❤',
    videoSrc: 'https://www.youtube.com/embed/QU9c0053UAU?si=RfNxVmK75c2uju5U'
  },
  {
    titulo: 'BTS - Butter',
    descricao: 'Tão suave quanto manteiga eu consigo te atrair como ninguem voce não precisa dizer nada para me lembrar que voce esta totalmente apaixonada  ❤',
    videoSrc: 'https://www.youtube.com/embed/WMweEpGlu_U?si=Nor-X8FzgoeNlEqc'
  },
  {
    titulo: 'BTS - Permission to Dance',
    descricao: 'Vamos desfazer nossos planos e viver como se fossemos feitos de ouro e dançar como se fossemos idiotas, promete dançar comigo pra sempre? ❤',
    videoSrc: 'https://www.youtube.com/embed/CuklIb9d3fI?si=P4z1c_7fd2b-oJxf '
  },
  {
    titulo: 'BTS - Fake Love',
    descricao: ' Por voce, eu seria capaz de fingir estar feliz mesmo estando triste, Por voce, eu seria capaz de fingir ser forte mesmo estando machucado.  Quero ser um bom homem, So para voce, eu dei o mundo, só pra voce. Te amo loucamente ❤ ',
    videoSrc: 'https://www.youtube.com/embed/7C2z4GqqS5E?si=wCsUxik3ghPyyQrf'
  },
  {
    titulo: "BTS (방탄소년단) 'Save ME' Official MV",
    descricao: 'Escute as batidas do meu coração, ele está te chamando por vontade própria, nessa escuridão você esta brilhando tanto, então me dê sua mão e me salve, me salve ❤',
    videoSrc: 'https://www.youtube.com/embed/GZjt_sA2eso?si=q9RRr3vfZ2Z1tHHS'
  },
  {
    titulo: "BTS (방탄소년단) 'Euphoria' Official MV",
    descricao: 'Você é o sol que ressurgiu na minha vida, uma reencarnação dos meus sonhos de infância, você é a causa da minha EUFORIA ❤',
    videoSrc: 'https://www.youtube.com/embed/oRgzdwQVPRg?si=iDlUm3LyszUGgGMm'
  },
  {
    titulo: "Justin Bieber - All That Matters",
    descricao: 'Voce é tudo o que importa para mim, Não me importo com ninguem mais, Se eu não estou com voce, não sou eu. Você é a única garota que eu vejo Você me completa ❤',
    videoSrc: 'https://www.youtube.com/embed/JC2yu2a9sHk?si=0hLyaUOfe_5gw80P'
  },
  {
    titulo: "Joji - Like You Do",
    descricao: 'Desde que eu te conheci, todos os dias sombrios parecem brilhar um pouco mais intensamente, considere o que temos porque eu não posso te deixar de lado. Ninguém me ama como você! ❤',
    videoSrc: 'https://www.youtube.com/embed/Bv-1BnoB75k?si=VPUV1ANb8cOmb-Gk'
  },
  {
    titulo: "Ansel Elgort - Supernova ",
    descricao: 'Meu coração está no céu, supernova. Olhe para cima, para as estrelas e para o oceano. Emoções nebulosas, momentos, erosão. Essa supernova poderia causar um tumulto. As ideias em minha cabeça, você ainda será meu motivo. ❤',
    videoSrc: 'https://www.youtube.com/embed/Q-oM2BQ8Jow?si=eAlyIQAv6TZH6yLo'
  },
  {
    titulo: "Jaymes Young - Infinity",
    descricao: 'Você é a razão pela qual eu acredito no destino, você é meu paraíso e farei qualquer coisa para ser seu amor ou seu sacrifício. Porque eu te amo até o infinito ❤',
    videoSrc: 'https://www.youtube.com/embed/PWqEPKduGm8?si=PsVZTpeyF0AtpYOl'
  },
  

]


export default Musicas;
