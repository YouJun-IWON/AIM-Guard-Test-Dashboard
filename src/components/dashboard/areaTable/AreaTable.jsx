import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Subject",
  "Prompt ID",
  "Date",
  "Customer ID",
  "Status",
  "Attack Type",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Privacy",
    order_id: 11232,
    date: "Apr 03,2024",
    customer: "user385",
    status: "delivered",
    amount: "Jailbreaks",
  },
  {
    id: 101,
    name: "Abuse",
    order_id: 11231,
    date: "Apr 03,2024",
    customer: "user737",
    status: "pending",
    amount: "Role-Playing",
  },
  {
    id: 102,
    name: "Abuse",
    order_id: 11230,
    date: "Apr 03,2024",
    customer: "user643",
    status: "canceled",
    amount: "...",
  },
  {
    id: 103,
    name: "Inaccurate",
    order_id: 11203,
    date: "Apr 03,2024",
    customer: "user854",
    status: "delivered",
    amount: "Context Leakage",
  },
  {
    id: 104,
    name: "Abuse",
    order_id: 11228,
    date: "Apr 03,2024",
    customer: "user153",
    status: "delivered",
    amount: "Direct Attack",
  },
  {
    id: 105,
    name: "Immoral",
    order_id: 11227,
    date: "Apr 03,2024",
    customer: "user493",
    status: "delivered",
    amount: "...",
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest detected attacks</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>{dataItem.amount}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
