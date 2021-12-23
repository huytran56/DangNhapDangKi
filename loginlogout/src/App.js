
import './App.css';
import rocketImg from '../src/assets/anh.jpeg';
import {Signup} from '../src/components/Signup'
function App() {
  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-5">
                <Signup />
            </div>  
            <div className="col-md-7">
                <img className="img-fluid w-100" src={rocketImg} />
            </div>  

        </div>
    </div>
  );
}

export default App;
