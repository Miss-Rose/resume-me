import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import likedIn from "../../assets/linkedin.svg";
import git from "../../assets/git.svg";
import {usePageTheme} from "../../context/ThemeContext.jsx";

export const Header = () => {
  const { theme } = usePageTheme();

  return (
    <header className={ theme === 'light' ? `${styles.header} ${styles.headerLight}` : `${styles.header} ${styles.headerDark}`}>
      <div>
        <h1>Tetiana Stepanova</h1>
        <h2>Frontend Engineer</h2>
      </div>

      <nav>
        <ul>
          <li><a href="#summary">About me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#studying">Studying</a></li>
          <li><a href="#languages">Languages</a></li>
        </ul>
      </nav>

      <div className={styles.networks}>
        <Link to="https://www.linkedin.com/in/tetiana-stepanova-1a1454175/" target="_blank">
          <img src={likedIn} alt="LinkedIn" height="40" width="40"/>
        </Link>
        <Link to="https://github.com/Miss-Rose" target="_blank">
          <img src={git} alt="GitHub" height="40" width="40"/>
        </Link>
      </div>
    </header>
  );
}