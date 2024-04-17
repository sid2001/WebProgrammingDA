import {BrowserRouter,Routes,Route} from "react-router-dom";
import Armstrong from './components/Armstrong';
import Counter from "/src/components/Counter";
import Home from "/src/components/Home";
import Navbar from "./components/Navbar";
import CoinFlip from '/src/components/CoinFlip';
import './App.css'

function App() {
 
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path='/coinFlip' element={<CoinFlip/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/armstrong'  element={<Armstrong/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App