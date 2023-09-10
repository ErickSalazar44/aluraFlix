
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { NavBar } from './components/Header/NavBar'
import MovieForId from './pages/MovieForId'

function App() {

	const fondo = {
		backgroundColor: "#292929",
		backgroundImage: "linear-gradient(to top, #01000a, #000000)",
		backgroundSize: "cover",
		backgroundRepeat: "repeat",
	}

	return (

			<div className='min-h-screen w-full' style={fondo}>
				<NavBar />
				<Routes>
					{/* Home page */}
					<Route path='/tv/:id' element={<MovieForId path={'/tv'}/>} />
					<Route path='/movie/:id' element={<MovieForId path={'/movie'}/>} />
					<Route path='/' element={<HomePage/>}/>
				</Routes>
			</div>
	)
}

export default App
