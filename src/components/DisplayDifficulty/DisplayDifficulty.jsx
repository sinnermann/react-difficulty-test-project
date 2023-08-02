import styles from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div className={styles.container}>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
}
