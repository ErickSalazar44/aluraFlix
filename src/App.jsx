import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { NavBar } from "./components/Header/NavBar";
import MovieForId from "./pages/MovieForId";
import SearchMovie from "./pages/SearchMovie";
import Footer from "./components/Footer/Footer";

function App() {
    // Modificar el color de Fondo
    const fondo = {
        backgroundColor: "#292929",
        backgroundImage: "linear-gradient(to top, #000000, #000000)",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
    };


    return (
        <div className='min-h-screen w-full select-none flex flex-col' style={fondo}>
            <NavBar />
            <Routes>
                {/* Home page */}
                <Route path='/' element={<HomePage />} />

                {/* Search Movie */}
                <Route path='/search' element={<SearchMovie />} />

                {/* Ruta Detalles tv */}
                <Route path='/tv/:id' element={<MovieForId path={"/tv"} />} />

                {/* Ruta Detalles Movie */}
                <Route
                    path='/movie/:id'
                    element={<MovieForId path={"/movie"} />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
