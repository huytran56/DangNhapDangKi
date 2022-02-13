
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Signup} from '../src/components/Signup'
import {Signin} from '../src/components/Signin'
import {Admin} from '../src/components/Admin'
function App() {
  return (
      <div>
            <Routes>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/" element={<Signin />}/>
              <Route path="/admin" element={<Admin />}/>
            </Routes>
        
    </div>
  );
}

export default App;
