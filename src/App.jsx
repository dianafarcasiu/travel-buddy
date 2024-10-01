import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";

import CitiesList from "./components/CitiesList";
import CountriesList from "./components/CountriesList";
import CityInfo from "./components/CityInfo";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Explore = lazy(() => import("./pages/Explore"));

function App() {
  return (
    <>
      <CitiesProvider>
        <BrowserRouter basename="/travel-buddy">
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </>
  );
}

export default App;
