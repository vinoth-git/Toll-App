import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable";
import Header from "../../components/Header";

interface Props {
  handleButton: any;
}

function HomePage(props: Props) {
  const { handleButton } = props;
  const [entryList, setentryList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  function fetchEntryList() {
    let entryList = localStorage.getItem("entryList") || "";
    let parsedList = (entryList && JSON.parse(entryList)) || [];
    if (parsedList && parsedList.length > 0) {
      setentryList(parsedList);
    }
  }

  useEffect(() => {
    fetchEntryList();
    window.addEventListener("storage", fetchEntryList);
    return () => {
      window.removeEventListener("storage", fetchEntryList);
    };
  }, []);

  function onSearchClick() {
    let entryList = localStorage.getItem("entryList") || "";
    let parsedList = (entryList && JSON.parse(entryList)) || [];
    if (!searchKey || searchKey === "") {
      setentryList(parsedList);
    }
    let newArr =
      parsedList &&
      parsedList.length &&
      parsedList.filter((c: any) => c.vehicleNumber.includes(searchKey));
    if (newArr && newArr.length) {
      setentryList(newArr);
    }
  }

  function onFilterClick(val: any) {
    let entryList = localStorage.getItem("entryList") || "";
    let parsedList = (entryList && JSON.parse(entryList)) || [];
    if (val === "All") {
      return setentryList(parsedList);
    }
    let newArr =
      parsedList &&
      parsedList.length &&
      parsedList.filter((c: any) => c.tollName.includes(val));
    if (newArr && newArr.length) {
      setentryList(newArr);
    }
  }

  return (
    <>
      <Header
        title="Toll entries / Vehicle entries"
        handleButton={handleButton}
        isFilter={true}
        setSearchKey={setSearchKey}
        onSearchClick={onSearchClick}
        entryList={entryList}
        onFilterClick={onFilterClick}
      />
      <CustomTable
        tableHead={[
          "Vehicle Type",
          "Vehicle Number",
          "Date/Time",
          "Toll Name",
          "Tarrif",
        ]}
        isEntry={true}
        tableContent={entryList}
      />
    </>
  );
}

export default HomePage;
