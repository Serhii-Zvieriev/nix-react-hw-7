export default function Button({ name, fn }) {
  return (
    <button className="btn" type="button" onClick={fn}>
      {name}
    </button>
  );
}
