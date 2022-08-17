
import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Ajouter from './ajouter';
import BlogDetail from './BlogDetail';

function App() {
  
  
  return (
    <BrowserRouter>
     <div className="App">
          <Navbar/>
          <div className="content">
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Ajouter" element={<Ajouter/>} />
            <Route path="/blog/:id" element={<BlogDetail/>} />
             
            </Routes>
         
          </div>
        
     </div>
     </BrowserRouter>
 
  );
}

export default App;
