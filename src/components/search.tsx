import { SvgSearch } from "./Icons";
import style from "../styles/home.module.css";

interface Props {}

function Search(props: Props) {
  return (
    <div className={style.searchRoot}>
      <SvgSearch />
      <input type="search" placeholder="Search Vehicle" />
    </div>
  );
}

export default Search;
