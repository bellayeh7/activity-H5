import { FC } from "react";
import Title1 from "../../assets/title1.png";
import Title2 from "../../assets/title2.png";
import Comment from "../../assets/comment.png";
import styles from './styles.module.scss'

const ThirdSection: FC = () => {
  return (
    <div className={styles.thirdSection}>
      <img src={Title1} alt="Title 1" />

      <img className={styles.comment} src={Comment} alt="Comment" />

      <img src={Title2} alt="Title 2" />

      <img className={styles.comment} src={Comment} alt="Comment" />
    </div>
  );
};

export default ThirdSection;
