import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import OurServices from './component/OurServices';
import Contact from './component/Contact';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/services" component={Contact} />
          <Route path="/about" component={OurServices} />
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
