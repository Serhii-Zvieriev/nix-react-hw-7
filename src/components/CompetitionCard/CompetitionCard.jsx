import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  finishedCompetition,
  getAllCompetition,
  getParticipantsCompetition,
} from "../../redux/competitionSlice";

import { getUsers } from "../../redux/usersSlice";

import Button from "../Button/Button";

function CompetitionCard({ competitionData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let win = "";
  let time = "";
  const { id, name, status, winner, participants } = competitionData;

  const competition = useSelector(getAllCompetition);
  const users = useSelector(getUsers);
  //   console.log(competition);

  const findeCompetitionForId = (id) => competition.find((el) => el.id === id);
  //   console.log(findeCompetitionForId("823452"));

  const finishedCompetitionFn = () => {
    if (status === "active") {
      // console.log(participants);
      findWinner(participants);
      dispatch(finishedCompetition({ id, win, time }));
      navigate(`/competition/${id}`, { replace: true });
    } else navigate(`/competition/${id}`, { replace: true });

    // <Navigate to="/" replace={true} />;
  };

  const findWinner = (participants) => {
    const arr = [];

    participants.map((participant) => {
      users.map((user) => {
        if (user.id === participant) arr.push(user.time);
      });
    });

    // arr.sort((a, b) => {
    //   if (a < b) {
    //     users.map((user) => {
    //       if (user.time === a) {
    //         win = user.name;
    //         time = user.time;
    //         // console.log(win, time);
    //       }
    //     });
    //   }
    // });

    // return { win, time };
    arr.sort((a, b) => a - b);
    users.map((user) => {
      if (user.time === arr[0]) {
        win = user.name;
        time = user.time;
      }
    });
  };

  // console.log(win, time);
  // const getParticipantsCompetitionFn = () => {};

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
