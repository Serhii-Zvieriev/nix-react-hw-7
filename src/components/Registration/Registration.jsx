import { useDispatch } from "react-redux";
import { useRef } from "react";

import Button from "../Button/Button";
import { addUser } from "../../redux/usersSlice";

export default function Registration() {
  const username = useRef();
  const surname = useRef();

  const dispatch = useDispatch();
  const shortid = require("shortid");

  const addUserFn = () => {
    dispatch(
      addUser({
        id: shortid.generate(),
        name: username.current.value,
        surname: surname.current.value,
      })
    );
    // setStopwatchOn(true);
    username.current.value = "";
    surname.current.value = "";
  };

  return (
    <div className="reg">
      <p>Registration user</p>

      <label htmlFor="username">First name</label>
      <input
        type="text"
        id="username"
        ref={username}
        autoComplete="off"
        placeholder="Enter first name..."
      ></input>

      <label htmlFor="surname">Second name</label>
      <input
        type="text"
        id="surname"
        ref={surname}
        autoComplete="off"
        placeholder="Enter second name..."
      ></input>

      <Button name="Register participant" fn={addUserFn} />
    </div>
  );
}
