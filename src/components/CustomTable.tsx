import styles from "../styles/component.module.css";

interface Props {
  tableHead: any;
  tableContent: any;
}

function CustomTable(props: Props) {
  const { tableHead, tableContent } = props;
  return (
    <table className={styles.table}>
      <tr>
        {tableHead &&
          tableHead.length > 0 &&
          tableHead.map((c: string) => <th>{c}</th>)}
      </tr>
      {tableContent &&
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
    </table>
  );
}

export default CustomTable;
