
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { NavBar } from './components/Header/NavBar'
import MovieForId from './pages/MovieForId'

function App() {

	const fondo = {
		backgroundColor: "#292929",
		backgroundImage: "linear-gradient(to top, #0d0c20, #000000)",
		backgroundSize: "cover",
		backgroundRepeat: "repeat",
	}

	return (
		<HashRouter>
			<div className='min-h-screen w-full' style={fondo}>
				<NavBar />
				<Routes>
					{/* Home page */}
					<Route path='/' element={<HomePage/>}/>
					<Route path='/movie/:id' element={<MovieForId/>} />
				</Routes>
			</div>
		</HashRouter>	
	)
}

export default App
