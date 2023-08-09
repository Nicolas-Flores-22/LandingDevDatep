import Header from './components/Header'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Header/>
      <main className='w-full h-full'>
        <Home/>
      </main>
      <footer className='w-full h-full bg-red-400'>
        Footer
      </footer>
    </>
  )
}

export default App
