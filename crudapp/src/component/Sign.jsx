import React from 'react'
import { Link } from 'react-router-dom'
function Sign() {
  return (
    <>
      <div className='main'>
        <div className='log'>
          <div className='image'>
            <img src="c.jpg" alt="signup logo" />
          </div>
          <div className='sign border-start'>
            <h2 className='my-4 text-center fs-1'>SignUp</h2>
            <form onSubmit={handleSubmit}>
              <i class="fa-solid fa-user me-3"></i>
              <label className="form-label">User Name</label>
              <input type="text" id="form3Example3" name='user_name' className="form-control form-control-lg"
                placeholder="Enter Name" required />
              <i class="fa-solid fa-envelope me-3"></i>
              <label className="form-label mt-2" for="form3Example3">User Email</label>
              <input type="email" id="form3Example4" name='user_email' className="form-control form-control-lg"
                placeholder="Enter a valid email address" required />
              <i class="fa-solid fa-calendar me-3" me-3></i>
              <label className="form-label mt-2" for="form3Example3">DOB</label>
              <input type="date" id="form3Example4" name='dob' className="form-control form-control-lg"
                placeholder="Enter your DOB" required />
              <i class="fa-solid fa-phone me-3"></i>
              <label className="form-label mt-2" for="form3Example3">Phone#</label>
              <input type="tel" id="form3Example4" name='phone' className="form-control form-control-lg"
                placeholder="Enter Phone #" required />
                <i class="fa-solid fa-lock me-3"></i>
                
              <label className="form-label mt-2" for="form3Example3">Password</label>
              <input type="password" id="form3Example4" name='password' className="form-control form-control-lg"
                placeholder="Enter Password" required />
                <i class="fa-solid fa-lock me-3"></i>
              <label className="form-label mt-2" for="form3Example3">Confirm Password</label>
              <input type="password" id="form3Example4" name='confirmpassword' className="form-control form-control-lg"
                placeholder="Confirm Password" required />
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0 ms-5">Don't have an account?<Link to={`/login`} className='text-center l ms-2'>Register</Link></p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sign
