import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App