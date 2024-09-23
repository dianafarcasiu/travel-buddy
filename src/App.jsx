import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import CitiesList from "./components/CitiesList";
import CountriesList from "./components/CountriesList";
import CityInfo from "./components/CityInfo";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />}>
              <Route
                index
                element={<Navigate replace to="/explore/cities" />}
              />
              <Route path="cities" element={<CitiesList />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="cities/:id" element={<CityInfo />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </>
  );
}

export default App;
