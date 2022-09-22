import { SvgSearch } from "./Icons";
import style from "../styles/home.module.css";
import { useState } from "react";

interface Props {
  isTollList?: Boolean;
  setSearchKey?: any;
  onSearchClick?: any;
}

function Search(props: Props) {
  const { isTollList = false, setSearchKey, onSearchClick } = props;

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        onSearchClick();
      }}
      className={style.searchRoot}
    >
      <SvgSearch onClick={onSearchClick} />
      <input
        onChange={(e: any) => {
          setSearchKey(e.target.value || "");
          onSearchClick();
        }}
        type="search"
        placeholder={isTollList ? "Search a toll" : "Search Vehicle"}
      />
    </form>
  );
}

export default Search;
