import { MenuListItem } from "../MenuListItem/MenuListItem";
import styles from "./styles.module.css";
import { DIFFICULTIES } from "./constant";

export default function MemuList(props) {
  return (
    <div className={styles.container}>
      {
        DIFFICULTIES.map((difficulty)=>{
          return (
            <MenuListItem
              isSelected={props.difficulty === difficulty}
              onClick={props.onItemClick}
              difficulty={difficulty}
            />
          );
        })
      }
      
    </div>
  );
}
