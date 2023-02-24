import CompetitionCard from "../CompetitionCard/CompetitionCard";

function CompetitionList({ competitionsData }) {
  return (
    <ul className="imageGallery">
      {competitionsData.map((competition) => (
        <CompetitionCard key={competition.id} competitionData={competition} />
      ))}
    </ul>
  );
}

export default CompetitionList;
