import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signupform from './component/Signupform';
import Login from './component/Login';
import './App.css';
import Home from './component/Home';
import Viewpage from './component/Viewpage';

function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signupform/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/update/:id' element={<Home/>}></Route>

          <Route path='/view' element={<Viewpage/>}></Route>

        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
