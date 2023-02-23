import { useSelector } from "react-redux";
import { getUsers } from "../../redux/usersSlice";
import { useState } from "react";

export default function Total() {
  const [winner, setWinner] = useState(null);

  const users = useSelector(getUsers);

  let col = users.length;

  const winnerFn = () => {
    const newArr = [...users];
    newArr.sort((a, b) => {
      if (a.time < b.time) {
        setWinner(a);
      }
    });
  };

  return (
    <div className="total">
      {!winner && (
        <>
          <p>Total participants: {col}</p>
          <button onClick={winnerFn} type="button">
            Show winner
          </button>
        </>
      )}
      {winner && (
        <>
          <p>The winner</p>
          <p>ID: {winner.id}</p>
          <p>Name: {winner.name}</p>
          <p>Time: {winner.time}</p>
        </>
      )}
    </div>
  );
}
