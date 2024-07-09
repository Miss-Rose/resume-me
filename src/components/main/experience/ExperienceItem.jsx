import styles from '../Main.module.scss';

export const ExperienceItem = ({ experience }) => {
  const {companyName, duties, period, position, technologies} = experience;

  return (
    <section className={styles.experienceItem}>
      <div className={styles.period}>{period}</div>
      <div className={styles.info}>
        <h3>{position} <span style={{color: "white"}}>/</span> <span className={styles.company}>{companyName}</span></h3>
        <div className={styles.duties}>{duties}</div>
        <div className={styles.technologies}>
          {
            technologies.split(", ").map((item, index) => {
              return <span key={index}>{item}</span>;
            })
          }
        </div>
      </div>
    </section>
  );
}