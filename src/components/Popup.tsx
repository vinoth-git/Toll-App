import styles from "../styles/component.module.css";
import { SvgClose } from "./Icons";

interface Props {
  children?: any;
  handleButton: any;
}

function Popup(props: Props) {
  const { children, handleButton } = props;
  return (
    <div className={styles.popupRoot}>
      <div className={styles.popupModel}>
        <SvgClose
          onClick={() => {
            handleButton(false, false);
            handleButton(true, false);
          }}
        />
        {children}
      </div>
    </div>
  );
}

export default Popup;
