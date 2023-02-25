import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAllCompetition } from "../../redux/competitionSlice";
import { getUsers } from "../../redux/usersSlice";
import CardList from "../CardList/CardList";

export default function Winner() {
  let { competitionId } = useParams();

  const competition = useSelector(getAllCompetition);
  const users = useSelector(getUsers);

  const findeCompetitionForId = (id) => competition.find((el) => el.id === id);

  const { time, name, winner, participants } =
    findeCompetitionForId(competitionId);

  const filterParticipants = () => {
    const arr = [];
    users.map((user) => {
      participants.filter((part) => {
        if (part === user.id) {
          arr.push(user);
        }
      });
    });
    return arr;
  };

  //   console.log(participants);
  //   console.log(filterParticipants());

  return (
    <div>
      <p>ID: {competitionId}</p>
      <p>Name: {name}</p>
      <p>Winner: {winner}</p>
      <p>Time: {time}</p>
      <p>Participants:</p>
      <CardList usersData={filterParticipants()} />
    </div>
  );
}
