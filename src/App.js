import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <div className="d-flex mb-5 justify-content-between align-items-center ">
        <img src={logo} alt=""  className='image ms-4'/>
        <div className="links">
          <ul class="nav justify-content-end me-4">
           <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Contact Us</a>
            </li>
          </ul>
        </div>    
      </div>
      <div className="info">
        <h1 className='mb-3 text-light'>Taste The Creativity</h1>
        <p className='text-muted'>We make awesome graphic and web design</p>
        <a href="#" className='btn mt-3'>Get Started</a>
      </div>

      
   </div>
  );
}

export default App;
