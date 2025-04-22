import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import { PokemonProvider } from "./context/PokemonContext.jsx";

function App() {
    return (
        <Router>
            <PokemonProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                </Routes>
            </PokemonProvider>
        </Router>
    );
}

export default App;
