import { usePageTheme } from "../../context/ThemeContext.jsx";
import styles from "./NavMenu.module.scss";
import {MySwitch} from "../switch/MySwitch.jsx";

export const NavMenu = () => {
  const { toggleTheme } = usePageTheme();

  return (
    <nav className={styles.topNameMenu}>

      <MySwitch onClick={toggleTheme}/>
    </nav>
  )
}