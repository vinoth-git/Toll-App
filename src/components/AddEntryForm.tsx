import styles from "../styles/component.module.css";
import Button from "./Button";
import Select from "./Select";

interface Props {}

function AddEntryForm(props: Props) {
  return (
    <div>
      <h4>Add new entry</h4>
      <div className={styles.entryForm}>
        <label>
          Select toll name<span>*</span>
        </label>
        <br />
        <select name="Select toll name" id="tollName" required></select>
        <br />
        <label>
          Select Vehicle type<span>*</span>
        </label>
        <br />
        <Select onChange={() => {}} />
        <br />

        <label>
          Vehicle Number<span>*</span>
        </label>
        <br />
        <input type={"text"} placeholder="Enter your login id" />
        <br />
        <Button label={"Add entry"} onClick={() => {}} />
      </div>
    </div>
  );
}

export default AddEntryForm;
