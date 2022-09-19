import Button from "../../components/Button";
import Search from "../../components/search";

interface Props {}

function HomePage(props: Props) {
  return (
    <>
      <div>
        <p>Toll entries / Vehicle entries</p>
        <Search />
        <Button label="Add vehicle entry" onClick={() => {}} />
      </div>
    </>
  );
}

export default HomePage;
