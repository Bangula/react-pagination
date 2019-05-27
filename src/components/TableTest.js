import React from "react";
import ReactTable from "react-table";

const TableTest = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(console.log);
  }, []);

  const columns = [
    {
      Header: props => <span style={{ color: "red" }}>ID</span>,
      accessor: "id"
    },
    {
      Header: "Title",
      accessor: "title"
    },
    {
      Header: "Link",
      filterable: false,

      Cell: props => (
        <div
          style={{ color: "white", cursor: "pointer", textAlign: "center" }}
          onClick={() => console.log(props.original.id)}
        >
          Item
        </div>
      )
    }
  ];
  return (
    <div
      className="custom-table"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 20px"
      }}
    >
      <ReactTable data={users} columns={columns} filterable />
    </div>
  );
};

export default TableTest;
