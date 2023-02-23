import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/usersSlice";

import Button from "../Button/Button";

function Card({ userData }) {
  const dispatch = useDispatch();
  const { id, name, time } = userData;

  const deleteUserFn = () => {
    dispatch(deleteUser(id));
  };

  return (
    <li className="cardItem">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Time: {time}</p>
      <Button name="Delete" fn={deleteUserFn} />
    </li>
  );
}

export default Card;
