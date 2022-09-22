import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable";
import Header from "../../components/Header";

interface Props {
  handleButton: any;
}

function TollList(props: Props) {
  const { handleButton } = props;
  const [tollList, setTollList] = useState([]);

  function fetchTollList() {
    let tollList = localStorage.getItem("tollList") || "";
    let parsedList = JSON.parse(tollList);
    if (parsedList && parsedList.length > 0) {
      setTollList(parsedList);
    }
  }

  useEffect(() => {
    fetchTollList();
    window.addEventListener("storage", fetchTollList);
    return () => {
      window.removeEventListener("storage", fetchTollList);
    };
  }, []);

  return (
    <>
      <Header
        title="Tollgate List"
        isTollList={true}
        handleButton={handleButton}
      />
      <CustomTable
        tableHead={[
          "Toll Name",
          `Car/Jeep/Van`,
          "Truck/bus",
          "Heavy Vehicle",
          "LCV",
        ]}
        tableContent={tollList}
      />
    </>
  );
}

export default TollList;
