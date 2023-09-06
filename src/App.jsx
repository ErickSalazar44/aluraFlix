
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

function App() {

	const fondo = {
		backgroundColor: "#292929",
		backgroundImage: "linear-gradient(to top, #14183b, #0b090e)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	}

	return (
		<HashRouter>
			<div className='min-h-screen w-full' style={fondo}>
				<Routes>
					{/* Home page */}
					<Route path='/' element={<HomePage/>}/>
				</Routes>
			</div>
		</HashRouter>	
	)
}

export default App
