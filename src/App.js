import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Stopwatch from "./components/Stopwatch/Stopwatch";
import Searchbar from "./components/Searchbar/Searchbar";
import CardList from "./components/CardList/CardList";
import Registration from "./components/Registration/Registration";
import Total from "./components/Total/Total";
import { getUsers } from "./redux/usersSlice";
import "./App.css";

function App() {
  const usersData = useSelector(getUsers);
  // console.log(usersData);
  const [stopwatchOn, setStopwatchOn] = useState(false);
  const [filter, setFilter] = useState("");

  const filterHendler = ({ target }) => {
    setFilter(target.value);
  };

  const filterUsersOrId = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return usersData.filter(
      (user) =>
        user.name.toLocaleLowerCase().includes(normalizedFilter) ||
        user.id.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="container">
      {!stopwatchOn && (
        <>
          <div className="leftSide">
            <Searchbar filter={filter} onChange={filterHendler} />
            <CardList usersData={filterUsersOrId()} />
          </div>
          <div className="rightSide">
            <Registration setStopwatchOn={setStopwatchOn} />
            <Total />
          </div>
        </>
      )}

      {stopwatchOn && (
        <Stopwatch time="00:00:00" setStopwatchOn={setStopwatchOn} />
      )}
    </div>
  );
}

export default App;
