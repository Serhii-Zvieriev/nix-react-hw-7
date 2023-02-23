import { useSelector } from "react-redux";
import { getUsers } from "../../redux/usersSlice";

export default function ClockFace({ amountOfTime }) {
  const user = useSelector(getUsers);
  return (
    <>
      <p>id: {user[user.length - 1].id}</p>
      <p>name: {user[user.length - 1].name}</p>
      <div className="clockFace">{amountOfTime}</div>
    </>
  );
}
