import style from "../styles/home.module.css";

interface Props {
  onChange: any;
  data?: any;
  isDisabled?: boolean;
  isEntry?: boolean;
}

function Select(props: Props) {
  const {
    onChange,
    isEntry = false,
    data = [
      {
        vehilceName: `Car/Jeep/Van`,
        isSelected: false,
      },
      {
        vehilceName: `Truck/bus`,
        isSelected: false,
      },
      {
        vehilceName: `Heavy Vehicle`,
        isSelected: false,
      },
      {
        vehilceName: `LCV`,
        isSelected: false,
      },
    ],
    isDisabled,
  } = props;
  return (
    <select
      required
      onChange={onChange}
      placeholder="Select Vehicle types"
      id="cars"
      disabled={isDisabled}
    >
      <option value="" selected hidden disabled={true}>
        Select Vehicle types
      </option>
      {data &&
        data.length > 0 &&
        data.map((c: any, index: number) => (
          <option
            value={isEntry ? c.vehilceName : index}
            disabled={c.isSelected}
          >
            {c.vehilceName}
          </option>
        ))}
    </select>
  );
}

export default Select;
