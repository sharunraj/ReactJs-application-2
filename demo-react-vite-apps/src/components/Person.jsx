import PersonCard from "./PersonCard";
function Person() {
  let onePerson = [
    {
      personId: 1,
      personFirstName: "John",
      personLastName: "Doe",
    },
    {
      personId: 2,
      personFirstName: "Jane",
      personLastName: "Smith",
    },
    {
        personId: 3,
      personFirstName: "Bob",
      personLastName: "Johnson",
    }
  ];
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Person Details</h2>
        <div className="row">
          {onePerson.map((person) => (
            <div key={person.personId} className="col-md-4">
              <PersonCard person={person} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Person;
