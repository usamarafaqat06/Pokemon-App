import { Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import Layout from "./layout/Layout";
import ComparePokemonPage from "./pages/comparePokemonPage";
import FavouritePokemonPage from "./pages/FavouritePokemonPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PokemonPage />} />
          <Route path="/compare" element={<ComparePokemonPage />} />
          <Route path="/favourite" element={<FavouritePokemonPage />} />
          <Route path="/details/:name" element={<PokemonDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
