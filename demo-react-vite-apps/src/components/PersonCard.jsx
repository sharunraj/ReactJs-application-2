const PersonCard = ({ person }) => {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {person.personFirstName} {person.personLastName}
        </h5>
        <p className="card-text">ID: {person.personId}</p>
      </div>
    </div>
  );
};

export default PersonCard;
