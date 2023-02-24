import { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Stopwatch from "./components/Stopwatch/Stopwatch";
import Searchbar from "./components/Searchbar/Searchbar";
import CardList from "./components/CardList/CardList";
import Registration from "./components/Registration/Registration";
import Total from "./components/Total/Total";
import CompetitionList from "./components/CompetitionList/CompetitionList";
import { getUsers } from "./redux/usersSlice";
import { getCompetition } from "./redux/competitionSlice";
import "./App.css";

function App() {
  const usersData = useSelector(getUsers);
  const competitionsData = useSelector(getCompetition);

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
      <Routes>
        <Route
          path="/"
          element={
            <div className="leftSide">
              {/* <Searchbar filter={filter} onChange={filterHendler} />
              <CardList usersData={filterUsersOrId()} /> */}
              <CompetitionList competitionsData={competitionsData} />
            </div>
          }
        />
        <Route
          path="/registration"
          element={
            <div className="rightSide">
              {/* <Registration setStopwatchOn={setStopwatchOn} /> */}
              <Registration />
              <Total />
            </div>
          }
        />
        <Route
          path="/stopwatch"
          element={
            // <Stopwatch time="00:00:00" setStopwatchOn={setStopwatchOn} />
            <Stopwatch time="00:00:00" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
