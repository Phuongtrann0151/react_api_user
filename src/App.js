import Hearder from '../src/components/Layout/Header.js'
import Footer from '../src/components/Layout/Footer.js'

const App = (props) => {
  props.children
  return (
    <div className="App">
      <Hearder/>
      <Footer/>
    </div>
  )
}

export default App;