import style from "../styles/home.module.css";

interface Props {
  onChange: any;
  data?: any;
  isDisabled?: boolean;
}

function Select(props: Props) {
  const { onChange, data = [], isDisabled = false } = props;
  return (
    <select
      required
      onChange={onChange}
      placeholder="Select Vehicle types"
      id="cars"
    >
      <option value="" selected hidden disabled={true}>
        Select Vehicle types
      </option>
      {data &&
        data.length > 0 &&
        data.map((c: any, index: number) => (
          <option value={index} disabled={c.isSelected}>
            {c.vehilceName}
          </option>
        ))}
      {/* <option value="car">Car/Jeep/Van</option>
      <option value="lcv">LCV</option>
      <option value="bus">Truck/Bus</option>
      <option value="heavy">Heavy Vehicle</option> */}
    </select>
  );
}

export default Select;
