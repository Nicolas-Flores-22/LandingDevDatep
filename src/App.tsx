import PublicLayout from './components/PublicLayout'
import Services from './pages/public/Services'
import Contact from './pages/public/Contact'
import Home from './pages/public/Home'
import OurWork from './pages/public/OurWork'
import { Routes, Route, Navigate } from 'react-router-dom'

function App () {
  return (
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/nuestro-trabajo' element={<OurWork/>}/>
          <Route path='/servicios' element={<Services/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
  )
}

export default App
