import './App.css'
import Image from './Image'
import About from './About'

function App() {
  const name = 'Ada Lovelace'

  return (
    <div className="App">
      <h1>{ name }</h1>
      <Image />
      <About />
    </div>
  )
}

export default App
