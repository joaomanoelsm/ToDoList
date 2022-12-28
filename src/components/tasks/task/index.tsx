import { useEffect, useRef, useState } from "react";
import pencilIcon from "../../../assets/svgs/Pencil.svg";
import checkedIcon from "../../../assets/svgs/Checked.svg";
import uncheckedIcon from "../../../assets/svgs/Unchecked.svg";

interface CheckboxRef {
  title: string;
  date: string;
  hour: string;
}

const Task = ({ title, date, hour }: CheckboxRef) => {
  const [checked, setChecked] = useState<boolean>(false);
  const checkboxRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (checked) {
      checkboxRef.current.style.backgroundImage = `url(${checkedIcon})`;
      checkboxRef.current.style.border = "2px solid var(--primary-main-color)";
    } else {
      checkboxRef.current.style.backgroundImage = `url(${uncheckedIcon})`;
      checkboxRef.current.style.border =
        "2px solid var(--secondary-main-color)";
    }
  }, [checked]);

  return (
    <div className="tasks__itens">
      <div className="tasks__info">
        <div className="tasks__title-container">
          <input
            defaultChecked={checked}
            onClick={() => setChecked((state) => !state)}
            ref={checkboxRef}
            className="tasks__checkbox"
            type="checkbox"
          />
          <h2 className="tasks__title">{title}</h2>
        </div>
        <div className="tasks__schedule">
          <span className="tasks__date">Date: {date}</span>
          <span className="tasks__hour">Hour: {hour}</span>
        </div>
      </div>
      <div className="tasks__edit">
        <img className="tasks__icon" src={pencilIcon} alt="Pencil icon" />
      </div>
    </div>
  );
};

export default Task;
