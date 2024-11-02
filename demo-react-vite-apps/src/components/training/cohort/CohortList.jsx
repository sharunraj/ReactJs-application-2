// CohortList.jsx
import { useState, useEffect } from "react";
import CohortAdd from "./CohortAdd";
import CohortData from "./CohortData"; // Import CohortData
import { Link } from "react-router-dom";

function CohortList() {
  const [allCohorts, setAllCohorts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cohorts")
      .then((response) => response.json())
      .then((data) => {
        setAllCohorts(data);
      })
      .catch((error) => console.error("Error fetching cohorts:", error));
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm((prevShow) => !prevShow);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddCohort = (newCohort) => {
    setAllCohorts((prevCohorts) => [...prevCohorts, newCohort]);
    setShowAddForm(false);
  };

  const filteredCohorts = allCohorts.filter((cohort) =>
    cohort.cohortStack.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mappedAllCohorts = filteredCohorts.map((eachCohort) => (
    <tr key={eachCohort.id}>
      <td>{eachCohort.id}</td>
      <td>{eachCohort.cohortStack}</td>
      <td>{eachCohort.cohortSize}</td>
      <td>
        {eachCohort.cohortVenueId === 0 ? (
          <button className="btn btn-success">MAP</button>
        ) : (
          eachCohort.cohortVenueId
        )}
      </td>
      <td>{eachCohort.cohortStartDate}</td>
      <td>{eachCohort.cohortDurationWeeks}</td>
      <td>{eachCohort.cohortSPOC}</td>
      <td>{eachCohort.cohortInstructor}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleView(eachCohort.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-archive-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
          </svg>
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleEdit(eachCohort.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleDelete(eachCohort.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
      </td>
    </tr>
  ));

  function handleEdit() {}

  function handleView(id) {
    let getCohort = allCohorts.filter((eachCohort) => eachCohort.id == id);
    // navigate to another component with route path /training/cohort-view
    // here we have to use programatic navigation with the help of useNavigate() hook
    navigate("/training/cohort-view/" + id, { state: getCohort[0] });
  }
  function handleDelete(id) {
    const filteredData = allCohorts.filter(
      (eachCohort) => eachCohort.id !== id
    );
    setAllCohorts(filteredData);
  }

  return (
    <div className="container m-5">
      <h3>COHORT LIST</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Stack Name"
        value={searchQuery}
        onChange={handleSearch}
      />
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>STACK NAME</th>
            <th>SIZE</th>
            <th>VENUE ID</th>
            <th>START DATE</th>
            <th>DURATION (in weeks)</th>
            <th>SPOC</th>
            <th>INSTRUCTOR</th>
            <th>VIEW</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>{mappedAllCohorts}</tbody>
      </table>
      <button className="btn btn-primary mb-3" onClick={toggleAddForm}>
        {showAddForm ? "Close Add Cohort Form" : "Add New Cohort"}
      </button>
      {showAddForm && <CohortAdd onAddCohort={handleAddCohort} />}
    </div>
  );
}

export default CohortList;
