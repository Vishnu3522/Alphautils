//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
<Navbar></Navbar>
<br></br>
<br></br>
<div className ="container">
  <Textform ></Textform>
  <About></About>
</div>
    </>
  );
}
export default App;
