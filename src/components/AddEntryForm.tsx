import { useEffect, useState } from "react";
import styles from "../styles/component.module.css";
import Button from "./Button";
import Select from "./Select";

interface Props {
  handleButton: any;
}

function AddEntryForm(props: Props) {
  const { handleButton } = props;
  const [tollList, setTollList] = useState([]);
  const [value, setValue] = useState({
    tollName: "",
    tarrif: 0,
    vehicleType: "",
    vehicleNumber: "",
    time: new Date().toLocaleString(),
  });
  useEffect(() => {
    let tollList = localStorage.getItem("tollList") || "";
    let parsedList = (tollList && JSON.parse(tollList)) || [];
    setTollList(parsedList);
  }, []);
  return (
    <div>
      <h4>Add new entry</h4>
      <form className={styles.entryForm}>
        <label>
          Select toll name<span>*</span>
        </label>
        <br />
        <select
          onChange={(e: any) => {
            setValue({ ...value, tollName: e.target.value });
          }}
          name="Select toll name"
          id="tollName"
          required
        >
          <option value="" selected hidden disabled={true}>
            Select Toll Name
          </option>{" "}
          {tollList &&
            tollList.length > 0 &&
            tollList.map((c: any) => {
              return <option value={c.tollName}>{c.tollName}</option>;
            })}
        </select>

        <br />
        <label>
          Select Vehicle type<span>*</span>
        </label>
        <br />
        <Select
          onChange={(e: any) => {
            let val: any = tollList.filter(
              (obj: any) => obj.tollName === value.tollName
            );
            let tarrif: any =
              val &&
              val.length > 0 &&
              val[0].fare &&
              val[0].fare.filter(
                (obj: any) => obj.vehilceName === e.target.value
              );
            setValue({
              ...value,
              tarrif: tarrif && tarrif.length > 0 ? tarrif[0].singleAmount : 0,
              vehicleType: e.target.value,
            });
          }}
          isEntry={true}
          isDisabled={Boolean(value && value.tollName === "")}
        />
        <br />

        <label>
          Vehicle Number<span>*</span>
        </label>
        <br />
        <input
          onChange={(e: any) =>
            setValue({ ...value, vehicleNumber: e.target.value })
          }
          required
          type={"text"}
          placeholder="Enter your login id"
        />
        <br />
        <label>
          Tarrif<span>*</span>
        </label>
        <br />
        <input
          disabled
          type={"text"}
          value={value.tarrif}
          placeholder="Tarrif"
        />
        <br />
        <Button
          label={"Add entry"}
          onClick={(e: any) => {
            e.preventDefault();
            let entryList = localStorage.getItem("entryList") || "";
            let newEntryList = (entryList && JSON.parse(entryList)) || [];
            localStorage.setItem(
              "entryList",
              JSON.stringify([...newEntryList, value])
            );
            handleButton(true, false);
            handleButton(false, false);
            window.dispatchEvent(new Event("storage"));
          }}
        />
      </form>
    </div>
  );
}

export default AddEntryForm;
