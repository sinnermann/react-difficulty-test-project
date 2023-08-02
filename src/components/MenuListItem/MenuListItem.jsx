import { useState } from "react";
import styles from "./styles.module.css";
import MemuList from "../MenuList/MenuList";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const activate = () => {
    setIsHovered(true);
  };

  const deactivate = () => {
    setIsHovered(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      className={styles.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};
