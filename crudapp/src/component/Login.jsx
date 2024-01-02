import React,{useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate  } from 'react-router-dom'
function Login() {
    const navi = useNavigate()
    useEffect(()=>{
     localStorage.clear()
    },[]);
    
    const handlelogin = async (e) => {
      e.preventDefault();
    
      const data = {
        user_email: e.target.user_email.value.trim(),
        password: e.target.password.value.trim(),
      };
    
      try {
      
        localStorage.clear();
        const login = await axios.post("http://localhost:4000/api/auth/login", data);
        const token = login.data.token;
        localStorage.setItem('token', token);
        const authResponse = await axios.post("http://localhost:4000/api/auth/authentication", { token });
        const user = authResponse.data;
        localStorage.setItem('User', JSON.stringify(user));
        navi('/view');
      } catch (error) {
        console.error(error);
      }
    };
    
  return (

    <>
      {/* <section className="vh-100" style={{ background: '#3498db', color: '#fff' }}>
        <h1 className='text-center py-4 fw-b'>LOGIN</h1>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handlelogin}>

          <div className="form-outline mb-4">
          <label className="form-label" for="form3Example3">Email address</label>

            <input type="email" id="form3Example3" name='user_email' className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" for="form3Example3">Password</label>

            <input type="password" id="form3Example4" name='password' className="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

        

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?<Link to={`/`} className='text-center '>Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section> */}
  <div className='mainl'>
      <div className='login'>
        <div className='imag'>
          <img src="e.jpg" alt="signup logo" />
        </div>
        <div className='sign border-start'>
          <h2 className='my-4 text-center fs-1'>LOGIN</h2>
          <form onSubmit={handlelogin}>
          
            <i class="fa-solid fa-envelope me-3"></i>
            <label className="form-label mt-2" for="form3Example3">User Email</label>
            <input type="email" id="form3Example4" name='user_email' className="form-control form-control-lg"
              placeholder="Enter a valid email address" required />
         
            <div>
              <i class="fa-solid fa-lock me-3"></i>
              <label className="form-label" htmlFor="form3Example4cd">Password</label>
              <input type="password" className="form-control" name='password' placeholder="Enter Password"/>
              <span className="input-group-btn">
                <button className="btn btn-default reveal" type="button"><i className="glyphicon glyphicon-eye-open"></i></button>
              </span>
            </div>
           
            <div className="text-center text-lg-start pt-2">
              <button type="submit" className="btn btn-primary sb btn-lg "
                style={{ paddingLeft: '1.5rem', paddingRight: '2.5rem' }}>LogIn</button>
              <p className="small fw-bold mt-3 pt-1 mb-0 ">Don't have an account?<Link to={`/`} className='text-center l ms-2'>Register</Link></p>
            </div>

          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
