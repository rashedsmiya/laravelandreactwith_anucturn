import {Route, Routes} from 'react-router'
import Home from './pages/Home'
import Createnewpost from './pages/Createnewpost'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new-post" element={<Createnewpost />} />
      </Routes>
    </>
  )
}

export default App
