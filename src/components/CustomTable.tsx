import styles from "../styles/component.module.css";

interface Props {
  tableHead: any;
  tableContent: any;
  isEntry?: boolean;
}

function CustomTable(props: Props) {
  const { tableHead, tableContent, isEntry = false } = props;
  return (
    <table className={styles.table}>
      <tr>
        {tableHead &&
          tableHead.length > 0 &&
          tableHead.map((c: string) => <th>{c}</th>)}
      </tr>
      {!isEntry &&
        tableContent &&
        tableContent.length > 0 &&
        tableContent.map((content: any) => {
          return (
            <tr>
              <td>{content.tollName}</td>
              {content &&
                content.fare &&
                content.fare.length > 0 &&
                content.fare.map((c: any) => (
                  <td>
                    {c.singleAmount}/{c.returnAmount}
                  </td>
                ))}
            </tr>
          );
        })}
      {isEntry &&
        tableContent &&
        tableContent.length > 0 &&
        tableContent.map((content: any) => {
          return (
            <tr>
              <td>{content.vehicleType}</td>
              <td>{content.vehicleNumber}</td>
              <td>{content.time || ""}</td>
              <td>{content.tollName}</td>
              <td>{content.tarrif}</td>
            </tr>
          );
        })}
    </table>
  );
}

export default CustomTable;
