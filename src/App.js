
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Signup} from '../src/components/Signup'
import {Signin} from '../src/components/Signin'
function App() {
  return (
      <div>
            <Routes>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/" element={<Signin />}/>
            </Routes>
        
    </div>
  );
}

export default App;
