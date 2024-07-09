import {ExperienceItem} from "./experience/ExperienceItem.jsx";
import {EducationItem} from "./education/EducationItem.jsx";
import styles from "./Main.module.scss";
import {usePageTheme} from "../../context/ThemeContext.jsx";

export const Main = ({ cvdata, loading, }) => {
  const { experience, languages, summary, education } = cvdata;

  const { theme } = usePageTheme();

  if(loading) {
    return <div>Loading...</div>
  }


  return (
    <main className={theme === 'light' ? `${styles.mainInfoSection} ${styles.mainInfoSectionLight}` : `${styles.mainInfoSection} ${styles.mainInfoSectionDark}`}>
      <section id="summary">
        <div>{summary}</div>
      </section>
      <div id="experience" className={styles.expertise}>
        <h2>Expertise</h2>
        {
          experience.map((item, index) => {
            return (
              <ExperienceItem key={index} experience={item}/>
            );
          })
        }
      </div>
      <div id="studying" className={styles.education}>
        <h2>Education</h2>
        {
          education.map((item, index) => {
            return (
              <EducationItem key={index} education={item}/>
            )
          })
        }
      </div>
      <div id="languages" className={styles.languages}>
        <h2>Languages</h2>
        <section>
          {
            languages.map((item) => {
              return Object.entries(item).map(([key, value]) => {
                return (
                  <span key={key}>
                  {key} - {value}
                </span>
                )
              });
            })
          }
        </section>
      </div>
    </main>
  );
}