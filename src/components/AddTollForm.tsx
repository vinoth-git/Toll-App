import { useState } from "react";
import styles from "../styles/component.module.css";
import Button from "./Button";
import Select from "./Select";

interface Props {
  handleButton: any;
}

function AddTollForm(props: Props) {
  const { handleButton } = props;
  const [name, setTollName] = useState("");
  const [carList, setCarList] = useState([
    {
      vehilceName: `Car/Jeep/Van`,
      singleAmount: 0,
      returnAmount: 0,
      isSelected: false,
    },
    {
      vehilceName: `Truck/bus`,
      singleAmount: 0,
      returnAmount: 0,
      isSelected: false,
    },
    {
      vehilceName: `Heavy Vehicle`,
      singleAmount: 0,
      returnAmount: 0,
      isSelected: false,
    },
    {
      vehilceName: `LCV`,
      singleAmount: 0,
      returnAmount: 0,
      isSelected: false,
    },
  ]);
  return (
    <>
      <h4>Add new toll</h4>
      <form className={styles.tollForm}>
        <label>
          Toll Name<span>*</span>
        </label>
        <br />
        <input
          onChange={(e: any) => {
            setTollName(e.target.value);
          }}
          required
          type={"text"}
          placeholder="Enter toll name"
        />
        <br />
        <label>
          Vehicle fare details<span>*</span>
        </label>
        <br />
        {carList &&
          carList.map((c, index) => {
            return (
              <div>
                {" "}
                <Select
                  data={carList}
                  onChange={(e: any) => {
                    let newValue: any = [...carList];
                    newValue[e.target.value].isSelected = true;
                    setCarList(newValue);
                  }}
                  isDisabled={c.isSelected}
                />
                <input
                  required
                  type={"number"}
                  placeholder="Single Journey"
                  onChange={(e: any) => {
                    let newValue: any = [...carList];
                    newValue[index].singleAmount = e.target.value;
                    setCarList(newValue);
                  }}
                />
                <input
                  required
                  type={"number"}
                  placeholder="Return Journey"
                  onChange={(e: any) => {
                    let newValue: any = [...carList];
                    newValue[index].returnAmount = e.target.value;
                    setCarList(newValue);
                  }}
                />
              </div>
            );
          })}
        <Button
          label={"Add details"}
          onClick={(e: any) => {
            e.preventDefault();
            let tollList = localStorage.getItem("tollList") || "";
            let newTollList = JSON.parse(tollList);
            localStorage.setItem(
              "tollList",
              JSON.stringify([
                { tollName: name, fare: carList },
                ...newTollList,
              ])
            );
            handleButton(true, false);
            handleButton(false, false);
            window.dispatchEvent(new Event("storage"));
          }}
        />
      </form>
    </>
  );
}

export default AddTollForm;
