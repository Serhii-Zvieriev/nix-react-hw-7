import Card from "../Card/Card";

function CardList({ usersData }) {
  // console.log(usersData);
  return (
    <ul className="imageGallery">
      {usersData.map((userData) => (
        <Card key={userData.id} userData={userData} />
      ))}
    </ul>
  );
}

export default CardList;
