import { Link } from "react-router-dom";
import styles from'./Header.module.css';

function Header(){
  return (
      <header >
        <h1 className={styles.logo_header}>사랑</h1>
        <Navbar/>
      </header>

  )
}

function Navbar(){
  return (
    <ul className={styles.header_list}>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/memorias">Memorias</Link></li>
      <li><Link to="/motivos">Motivos</Link></li>
    </ul>
  )
}
export default Header;