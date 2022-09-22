import { useNavigate } from "react-router-dom";
import styles from "../styles/component.module.css";
import Button from "./Button";
import { SvgFilter } from "./Icons";
import Search from "./search";

interface Props {
  title: string;
  isTollList?: boolean;
  handleButton: (isTollEntry: boolean, value: boolean) => void;
}

function Header(props: Props) {
  const { title, isTollList = false, handleButton } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div>
        <p>{title}</p>
        <SvgFilter />
        <Search isTollList={isTollList} />
      </div>
      <div>
        <Button
          label="Add vehicle entry"
          onClick={() => {
            handleButton(false, true);
          }}
        />
        <Button
          label="Add new toll"
          onClick={() => {
            handleButton(true, true);
          }}
        />
        <Button
          label={isTollList ? "Back to vehicle logs" : "View all tolls"}
          onClick={() => {
            if (isTollList) {
              navigate("/");
            } else {
              navigate("/toll-list");
            }
          }}
        />
      </div>
    </div>
  );
}

export default Header;
