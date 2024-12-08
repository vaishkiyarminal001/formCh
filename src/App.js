import './App.css';
import Allroutes from './Components/Allroutes';
import { Navbar } from './Components/Navbar/Nav';
import Text from './Components/Text';




function App() {
  return (
    <div className="App">
    <Navbar/>
     <Text/>
    <Allroutes/>
  

    <p className='dev'>Developed by <a href="https://kalyantech.netlify.app/" target="_blank">KalyanTech</a></p>


    </div>
  );
}

export default App;
