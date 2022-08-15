import styles from "./style.module.css";
import DefaultUserImg from "../../../asset/user1.png";
import DefaultMaleUserImg from "../../../asset/user2.png";
import cx from "classnames";

const ResultUser = ({ img, name, age, sex, height, weight, disease }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img
          src={img ?? sex === "남자" ? DefaultMaleUserImg : DefaultUserImg}
          alt="user"
        />
      </div>
      <div className={styles.userInfo}>
        <h4 style={{ color: "white" }}>{name}</h4>
        <div className={styles.row}>
          <div>나이/성별</div>
          <div className={cx(styles.tag, styles.blue)}>{`${age}/${sex}`}</div>
        </div>
        <div className={styles.row}>
          <div>키/체중</div>
          <div className={cx(styles.tag, styles.yellow)}>{`${
            height + "cm" ?? "없음"
          } / ${weight + "kg" ?? "없음"}`}</div>
        </div>
        <div className={styles.row}>
          <div>특이사항</div>
          <div className={cx(styles.tag, styles.black)}>
            {disease ?? "없음"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultUser;
