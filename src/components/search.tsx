import { SvgSearch } from "./Icons";
import style from "../styles/home.module.css";

interface Props {
  isTollList?: Boolean;
}

function Search(props: Props) {
  const { isTollList = false } = props;
  return (
    <div className={style.searchRoot}>
      <SvgSearch />
      <input
        type="search"
        placeholder={isTollList ? "Search a toll" : "Search Vehicle"}
      />
    </div>
  );
}

export default Search;
