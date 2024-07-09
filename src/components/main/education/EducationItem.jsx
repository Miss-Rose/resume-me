import styles from '../Main.module.scss';

export const EducationItem = ({ education }) => {
  const {field, uni, years} = education;

  return (
    <section className={styles.educationItem}>
      <div className={styles.period}>{years}</div>
      <div>
        <h3 className={styles.field}>{field}</h3>
        <div className={styles.uni}>{uni}</div>
      </div>
    </section>
  );
}