
import { Allroutes } from './route/Allroutes';
import './App.css';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { Textcontext } from './contextapi/taskcontext';


function App() {
  const {state}=useContext(Textcontext)
    console.log(state)
  return (
    <div>
       <div className="App">
<Navbar/>
     <Allroutes/>
</div>

    

    </div>
   
  );
}

export default App;
