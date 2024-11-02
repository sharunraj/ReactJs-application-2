import { useState, useEffect } from "react";

export default function VenueList() {
  const [allVenues, setAllVenues] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/venues")
        .then((response) => response.json())
        .then((data) => {
          setAllVenues(data);
        })
        .catch((error) => console.error("Error fetching venues:", error));
    }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredVenues = allVenues.filter((venue) =>
    venue.venueName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mappedAllVenues = filteredVenues.map((eachVenue) => (
    <tr key={eachVenue.id}>
      <td>{eachVenue.id}</td>
      <td>{eachVenue.venueName}</td>
      <td>{eachVenue.venueSeater}</td>
      <td>{eachVenue.isVenueAC ? "AC" : "NON-AC"}</td>
      <td>{eachVenue.venueCity}</td>
      <td>{eachVenue.venueState}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleView(eachVenue.id)}
        >
          VIEW
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleEdit(eachVenue.id)}
        >
          EDIT
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleDelete(eachVenue.id)}
        >
          DELETE
        </button>
      </td>
    </tr>
  ));

  function handleView(id) {
    console.log(id);
  }

  function handleEdit() {}

  function handleDelete(id) {
    const filteredData = allVenues.filter(
      (eachVenue) => eachVenue.id !== id
    );
    setAllVenues(filteredData);
  }

  return (
    <>
      <div className="container m-5">
        
        <h3>VENUE LIST</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by Venue Name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SEATER CAPACITY</th>
              <th>AC/NON-AC</th>
              <th>CITY</th>
              <th>STATE</th>
            </tr>
          </thead>
          <tbody>{mappedAllVenues}</tbody>
        </table>
      </div>
    </>
  );
}
