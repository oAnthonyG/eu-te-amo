
import { useState } from 'react';
import { ImageGalery } from './ImageGalery';
import styles from './Motivos.module.css';
import Objetivos from '../components/Objetivos';
import Musicas from '../components/Musicas';


function Motivos() {
  const images = [
    { url: 'https://i.imgur.com/bsuZGVK.png' },
    { url: 'https://i.imgur.com/d8EBtmM.png' },
    { url: 'https://i.imgur.com/M5jefx4.png' },
    { url: 'https://i.imgur.com/EfSmiy2.png' },
    { url: 'https://i.imgur.com/ieSfUfv.png' },
    { url: 'https://i.imgur.com/01QWv0Q.png' },
    { url: 'https://i.imgur.com/WZgR9eb.png' },
    { url: 'https://i.imgur.com/DieZcNf.png' },
    { url: 'https://i.imgur.com/0O0btrG.png' },
    { url: 'https://i.imgur.com/pRzQK8y.png' },
    { url: 'https://i.imgur.com/rZXhHGk.png' },
    { url: 'https://i.imgur.com/JKe7w32.png' },
    { url: 'https://i.imgur.com/SIfhQcv.png' },
    { url: 'https://i.imgur.com/cqgJR1h.png' },
    { url: 'https://i.imgur.com/ohZfZN7.png' },
    { url: 'https://i.imgur.com/D7O649t.png' },
    { url: 'https://i.imgur.com/CUGnTLP.png' },
    { url: 'https://i.imgur.com/iyRgUYZ.png' },
    { url: 'https://i.imgur.com/reNBwuB.png' },
    { url: 'https://i.imgur.com/4WNnR9C.png' },
    { url: 'https://i.imgur.com/jn5cZHZ.png' },
    { url: 'https://i.imgur.com/FVwtRht.png' },
    { url: 'https://i.imgur.com/p8FjlVu.png' },
    { url: 'https://i.imgur.com/E8AlRvs.png' },
    { url: 'https://i.imgur.com/pxGXD6i.png' },
    { url: 'https://i.imgur.com/tmOcwJb.png' },
    { url: 'https://i.imgur.com/dFYkoTo.png' },
    { url: 'https://i.imgur.com/CP3VI0u.png' },
    { url: 'https://i.imgur.com/52SR4Wb.png' },
    { url: 'https://i.imgur.com/mzcE8fK.png' },
    { url: 'https://i.imgur.com/wXM6HlF.png' },
    { url: 'https://i.imgur.com/gcedZIB.png' },
    { url: 'https://i.imgur.com/Gt8p86E.png' },
    { url: 'https://i.imgur.com/EE0C5vv.png' },
    { url: 'https://i.imgur.com/w3GbGQU.png' },
    { url: 'https://i.imgur.com/nqDvwsG.png' },
    { url: 'https://i.imgur.com/84b5IpC.png' },
    { url: 'https://i.imgur.com/tbLw3EV.png' },
    { url: 'https://i.imgur.com/81PVgTl.png' },
    { url: 'https://i.imgur.com/It375AF.png' },
    { url: 'https://i.imgur.com/woR6jxU.png' },
    { url: 'https://i.imgur.com/DnNl34C.png' },

    // Adicione mais objetos de imagem conforme necessário
  ];
  const [currentPage, setCurrentPage] = useState('album')

  const handleTabChange = (tab) => {
    setCurrentPage(tab)
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'album':
        return (<section>
          <h2>Nossas Fotos</h2>
          <div className={styles.container_album}>
            <ImageGalery images={images} />
          </div>
        </section>)
      case 'musicas':
        return (<Musicas />);
      case 'objetivos':
        return (<Objetivos />);
      default:
        return null;
    }
  }

  return (
    <section className={styles}>
      <h1>𝓶𝓸𝓽𝓲𝓿𝓸𝓼 𝓺𝓾𝓮 𝓶𝓮 𝓯𝓪𝔃𝓮𝓶 𝓹𝓮𝓷𝓼𝓪𝓻 𝓮 𝓪𝓶𝓪𝓻 𝓿𝓸𝓬𝓮̂</h1>
      <div className={styles.containerButtonNaV}>
        <button onClick={() => handleTabChange('musicas')} className={currentPage === 'musicas' ? 'active' : ''}>Musicas</button>
        <button onClick={() => handleTabChange('album')} className={currentPage === 'album' ? 'active' : ''}>Album</button>
        <button onClick={() => handleTabChange('objetivos')} className={currentPage === 'objetivos' ? 'active' : ''}>Objetivos</button>
      </div>
      <div>
        {renderContent()}
      </div>
    </section>
  )
}





export default Motivos;