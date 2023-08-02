import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import styles from "./styles.module.css";

export default function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div>
      <h1>Select Your React Difficulty.</h1>
      <div className={styles.workspace}>
        <MenuList onItemClick={onMenuListItemClick} />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
