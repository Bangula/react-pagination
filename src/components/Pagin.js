import React from "react";
import Pagination from "react-js-pagination";

let itemsCount;

function Pagin() {
  const [activePage, setActivePage] = React.useState(3);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => {
        itemsCount = json.length;
        setUsers(json);
      })
      .catch(console.log);
  }, []);

  const handlePageChange = pageNum => {
    console.log(pageNum);
    let page;
    if (pageNum === 1) {
      page = 0;
    } else {
      page = pageNum;
    }
    setActivePage(page);
  };

  const newList =
    users.length > 0
      ? users
          .map(item => {
            return <li key={item.id}>{`${item.id}. ${item.title}`}</li>;
          })
          .splice(activePage * 10, 10)
      : null;
  return (
    <div className="pagination">
      <h3>Pagination</h3>
      <div className="pagi-list">
        <ul>{newList}</ul>
      </div>
      <div className="pagi-control">
        <Pagination
          prevPageText="prev"
          nextPageText="next"
          firstPageText="first"
          lastPageText="last"
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={itemsCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Pagin;
