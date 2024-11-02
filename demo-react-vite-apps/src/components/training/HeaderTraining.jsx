import { Link, Outlet } from "react-router-dom";

function HeaderTraining() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-light">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/training/venue-list" className="nav-link">
                VENUE LIST
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training/venue-add" className="nav-link">
                VENUE ADD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training/cohort-list" className="nav-link">
                COHORT LIST
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training/cohort-add" className="nav-link">
                COHORT ADD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training/cohort-view/:cohortid" className="nav-link">
                VIEW LIST
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/JsonPlaceholder" className="nav-link">
                Fake API
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default HeaderTraining;
