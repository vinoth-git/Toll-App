import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable";
import Header from "../../components/Header";

interface Props {
  handleButton: any;
}

function TollList(props: Props) {
  const { handleButton } = props;
  const [tollList, setTollList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  function fetchTollList() {
    let tollList = localStorage.getItem("tollList") || "";
    let parsedList = tollList && JSON.parse(tollList);
    if (parsedList && parsedList.length > 0) {
      setTollList(parsedList);
    }
  }

  function onSearchClick() {
    let tollList = localStorage.getItem("tollList") || "";
    let parsedList = tollList && JSON.parse(tollList);
    let data: any = [];
    if (searchKey === "" || !searchKey) {
      window.location.reload();
    }
    parsedList.map((item: any) => {
      if (item.tollName.includes(searchKey)) {
        data = [...data, item];
      }
    });
    setTollList(data);
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
        isFilter={false}
        setSearchKey={setSearchKey}
        onSearchClick={onSearchClick}
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
