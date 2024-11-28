import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import sfondo from './data/Libreria.jpg'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <main className='sfondo'>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </main>
      <MyFooter />
    </>
  )
}

export default App
