import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Header/>
      <main className='w-full h-full'>
        <Home/>
      </main>
      <Footer/>
    </>
  )
}

export default App
