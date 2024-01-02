import { Link, useNavigate } from "react-router-dom"
import '../View.css';

function Navbar(){
  const navi = useNavigate()
  const handleLogout=()=>{
  localStorage.clear()
 navi('/login')
  }
      return(
        <>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to={'/home'} className="fw-bolder text-light head">EMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/home'} className="nav-link mx-2 active text-light fs-5" aria-current="page">Add Employee</Link>
        </li>
        <li className="nav-item">
        <Link to={'/view'} className="nav-link mx-2 active text-light fs-5" aria-current="page">View Employee</Link>

        </li>
      </ul>
     
        <button className="bLog py-2" onClick={handleLogout} >LOGOUT</button>
     
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar