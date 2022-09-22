import { useNavigate } from "react-router-dom";
import styles from "../styles/component.module.css";
import Button from "./Button";
import { SvgFilter } from "./Icons";
import Search from "./search";
import React, { useState } from "react";
interface Props {
  title: string;
  isTollList?: boolean;
  handleButton: (isTollEntry: boolean, value: boolean) => void;
  setSearchKey?: any;
  onSearchClick?: any;
  isFilter?: boolean;
  entryList?: any;
  onFilterClick?: any;
}

function Header(props: Props) {
  const {
    title,
    isTollList = false,
    isFilter = false,
    handleButton,
    setSearchKey,
    onSearchClick,
    onFilterClick,
  } = props;
  const [isFilterShow, setIsFilterShow] = useState(false);

  let entryList = localStorage.getItem("entryList") || "";
  let parsedList = (entryList && JSON.parse(entryList)) || [];

  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div>
        <p>{title}</p>
        {isFilter && (
          <SvgFilter onClick={() => setIsFilterShow(!isFilterShow)} />
        )}
        {isFilterShow ? (
          <div className={styles.filerCard}>
            {parsedList &&
              parsedList.length &&
              [{ tollName: "All" }, ...parsedList].map((item: any) => (
                <div
                  className={styles.filterList}
                  onClick={() => {
                    onFilterClick(item.tollName);
                    setIsFilterShow(false);
                  }}
                >
                  {item.tollName}
                </div>
              ))}
          </div>
        ) : (
          <></>
        )}
        <Search
          isTollList={isTollList}
          setSearchKey={setSearchKey}
          onSearchClick={onSearchClick}
        />
      </div>
      <div>
        <Button
          label="Add vehicle entry"
          onClick={() => {
            handleButton(false, true);
          }}
        />
        <Button
          label="Add new toll"
          onClick={() => {
            handleButton(true, true);
          }}
        />
        <Button
          label={isTollList ? "Back to vehicle logs" : "View all tolls"}
          onClick={() => {
            if (isTollList) {
              navigate("/");
            } else {
              navigate("/toll-list");
            }
          }}
        />
      </div>
    </div>
  );
}

export default Header;
