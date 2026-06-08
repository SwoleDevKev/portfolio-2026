import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Career from './pages/Career'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  )
}
