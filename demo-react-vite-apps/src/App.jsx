// import './App.css'
import Display from "./components/Display";
import MovieComponent from "./components/MovieComponent";
import Color from "./components/Color";
import NumberComponent from "./components/NumberComponent";
import Person from "./components/Person";
import ButtonClick from "./components/ButtonClick";
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from "./components/Counter";
import { ChangeText } from "./components/ChangeText";
import MovieList from "./components/MovieList";
import EcomList from "./components/ecommerce/EcomList";
import HeaderTraining from "./components/training/HeaderTraining";
import CohortList from "./components/training/cohort/CohortList";
import VenueList from "./components/training/venue/VenueList";
import CohortAdd from "./components/training/cohort/CohortAdd"; 
import CohortView from "./components/training/cohort/CohortView";
import JsonPlaceholder from "./components/JsonPlaceholder";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <h1 className="text-center">App Component</h1> */}
      {/* <Display />
      <MovieComponent />
      <Color />
      <NumberComponent /> */}
      {/* <Person />
      <ButtonClick />
      <Counter/>
      <ChangeText/>
      <MovieList/> */}
      {/* <EcomList /> */}
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Counter/>}/>
      <Route path="/movie" element={<MovieList/>}/>
      <Route path="/ecom" element={<EcomList/>}/>
      <Route path="/jsonplaceholder" element={<JsonPlaceholder/>}/>
      <Route path="/training" element={<HeaderTraining/>}>
        <Route path='venue-list' element={<VenueList/>}></Route>
        <Route path='cohort-list' element={<CohortList/>}></Route>
        <Route path='cohort-add' element={<CohortAdd/>}></Route>
        <Route path='cohort-view/:id' element={<CohortView/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
