import CustomTable from "../../components/CustomTable";
import Header from "../../components/Header";

interface Props {
  handleButton: any;
}

function HomePage(props: Props) {
  const { handleButton } = props;
  return (
    <>
      <Header
        title="Toll entries / Vehicle entries"
        handleButton={handleButton}
      />
      <CustomTable
        tableHead={[
          "Vehicle Type",
          "Vehicle Number",
          "Date/Time",
          "Toll Name",
          "Tarrif",
        ]}
        tableContent={[
          { data: ["vinoth", 21] },
          { data: ["vinoth", 21] },
          { data: ["vinoth", 21] },
          { data: ["vinoth", 21] },
        ]}
      />
    </>
  );
}

export default HomePage;
