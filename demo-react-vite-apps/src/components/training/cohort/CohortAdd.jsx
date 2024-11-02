import { useState } from "react";

function CohortAdd({ onAddCohort }) {
  const [cohort, setCohort] = useState({
    cohortId: "",
    cohortStack: "",
    cohortSize: "",
    cohortVenueId: "",
    cohortStartDate: "",
    cohortDurationWeeks: "",
    cohortSPOC: "",
    cohortInstructor: "",
  });

  const handleChange = (e) => {
    setCohort({ ...cohort, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    onAddCohort(cohort);
    setCohort({
      cohortId: "",
      cohortStack: "",
      cohortSize: "",
      cohortVenueId: "",
      cohortStartDate: "",
      cohortDurationWeeks: "",
      cohortSPOC: "",
      cohortInstructor: "",
    });
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        name="cohortId"
        value={cohort.cohortId}
        onChange={handleChange}
        placeholder="Cohort ID"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortStack"
        value={cohort.cohortStack}
        onChange={handleChange}
        placeholder="Cohort Stack"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortSize"
        value={cohort.cohortSize}
        onChange={handleChange}
        placeholder="Cohort Size"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortVenueId"
        value={cohort.cohortVenueId}
        onChange={handleChange}
        placeholder="Venue ID"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortStartDate"
        value={cohort.cohortStartDate}
        onChange={handleChange}
        placeholder="Start Date"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortDurationWeeks"
        value={cohort.cohortDurationWeeks}
        onChange={handleChange}
        placeholder="Duration Weeks"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortSPOC"
        value={cohort.cohortSPOC}
        onChange={handleChange}
        placeholder="SPOC"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="cohortInstructor"
        value={cohort.cohortInstructor}
        onChange={handleChange}
        placeholder="Instructor"
        className="form-control mb-2"
      />
      <button onClick={handleAdd} className="btn btn-primary">
        Add Cohort
      </button>
    </div>
  );
}

export default CohortAdd;
