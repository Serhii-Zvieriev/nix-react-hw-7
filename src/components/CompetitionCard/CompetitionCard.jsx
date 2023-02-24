import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  finishedCompetition,
  getCompetition,
} from "../../redux/competitionSlice";

import Button from "../Button/Button";

function CompetitionCard({ competitionData }) {
  const dispatch = useDispatch();
  const { id, name, status, winner } = competitionData;

  const competition = useSelector(getCompetition);
  //   console.log(competition);

  const findeCompetitionForId = (id) => competition.find((el) => el.id === id);
  //   console.log(findeCompetitionForId("823452"));

  const finishedCompetitionFn = () => {
    dispatch(finishedCompetition(id));
    // <Navigate to="/" replace={true} />;
  };

  return (
    <li className="cardItem">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
      {status === "finished" && <p>Winner: {winner}</p>}
      <Button name="Show" fn={finishedCompetitionFn} />
    </li>
  );
}

export default CompetitionCard;
