import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
function Signupform() {
  const navi = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmpassword.value.trim();

    if (password !== confirmPassword) {
      alert("Passwords don't match. Please enter the same password in both fields.");
      return;
    }

    const data = {
      user_name: e.target.user_name.value.trim(),
      user_email: e.target.user_email.value.trim(),
      dob: e.target.dob.value.trim(),
      phone: e.target.phone.value.trim(),
      gender: e.target.gender.value.trim(),
      password: e.target.password.value.trim(),
    }
    axios.post("http://localhost:4000/api/auth/signup", data)
      .then(() => {
        navi('/login')
        e.target.reset()

      })
      .catch((err) => {
        console.log(err);
      })



  }
  return (
    //         <div style={{ background: '#3498db', color: '#fff' }}>

    //                 <div className="signup">
    //                     <div className="row justify-content-center">
    //                         <div className="col-md-8">

    //                             <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

    //                             <form className="mx-1 mx-md-4 ff" onSubmit={handleSubmit}>

    //                                 <div className="mb-4">
    //                                     <i className="fas fa-user fa-lg me-3"></i>
    //                                     <label className="form-label" htmlFor="form3Example1c">Name</label>
    //                                     <input type="text" id="form3Example1c" className="form-control" name="user_name"  required/>
    //                                 </div>

    //                                 <div className="mb-4">
    //                                     <i className="fas fa-envelope fa-lg me-3"></i>
    //                                     <label className="form-label" htmlFor="form3Example3c">Email</label>
    //                                     <input type="email" id="form3Example3c" name='user_email' className="form-control"  required/>
    //                                 </div>

    //                                 <div className="mb-4">
    //                                     <i className="fas fa-user fa-lg me-3"></i>
    //                                     <label className="form-label" htmlFor="form3Example4c">Age</label>
    //                                     <input type="date" id="form3Example4c" name='dob' className="form-control"  required/>
    //                                 </div>

    //                                 <div className="mb-4">
    //                                     <i className="fa-solid fa-earth-asia me-3"></i>
    //                                     <label className="form-label" htmlFor="form3Example4cd">Phone#</label>
    //                                     <input type="tel" id="form3Example4cd" name='phone' className="form-control"  required/>
    //                                 </div>

    //                                 <div className="mb-4 d-flex align-items-center">
    //                                     <i className="fas fa-image fa-lg me-3"></i>
    //                                     <label className="form-label me-2" htmlFor="customFile">Gender</label>

    //                                     <div className="form-check form-check-inline mx-3">
    //                                         <input type="radio" className="form-check-input" name="gender" id="male" value="male" />
    //                                         <label className="form-check-label" htmlFor="male">Male</label>
    //                                     </div>

    //                                     <div className="form-check form-check-inline mx-5">
    //                                         <input type="radio" className="form-check-input" name="gender" id="female" value="female" />
    //                                         <label className="form-check-label" htmlFor="female">Female</label>
    //                                     </div>
    //                                 </div>


    //                                 <div className="mb-2">
    //                                 <i className="fa-solid fa-earth-asia me-3"></i>

    //                                     <label className="form-label" htmlFor="form3Example4cd">Password</label>

    //                                     <input type="password" className="form-control" name='password' />
    //                                     <span className="input-group-btn">
    //                                         <button className="btn btn-default reveal" type="button"><i className="glyphicon glyphicon-eye-open"></i></button>
    //                                     </span>
    //                                 </div>
    //                                 <div className="mb-2">
    //                                 <i className="fa-solid fa-earth-asia me-3"></i>

    //                                     <label className="form-label" htmlFor="form3Example4cd">Confirm Password</label>
    // <br/>
    //                                     <input type="password" className="form-control" name='confirmpassword' required />
    //                                     <span className="input-group-btn">
    //                                         <button className="btn btn-default reveal" type="button"><i className="glyphicon glyphicon-eye-open"></i></button>
    //                                     </span>
    //                                 </div>


    //                                 <div className="d-flex flex-column justify-content-center mx-4 mb-lg-4">
    //                                     <button type="submit"  className="btn btn-primary btn-lg my-2">Register</button>
    //                                     <p className="small fw-bold mt-2 text-center pt-1 mb-0">Already have an account? <Link to={`/login`} className='text-center '>Login</Link>

    // </p>
    //                                 </div>

    //                             </form>

    //                         </div>

    //                     </div>




    //                 </div>
    //             </div>

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
            <div className="radio-group mt-1">
            <i className="fa-solid fa-user me-3 mt-3"></i>

              <label>Gender</label>
              <input type="radio" id="male" name="gender" value="male" />
              <label className='me-2' htmlForfor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="css">Female</label>
              
            </div>
            <i class="fa-solid fa-phone me-3"></i>
            <label className="form-label mt-2" for="form3Example3">Phone#</label>
            <input type="tel" id="form3Example4" name='phone' className="form-control form-control-lg"
              placeholder="Enter Phone #" required />
            <div>
              <i class="fa-solid fa-lock me-3"></i>
              <label className="form-label" htmlFor="form3Example4cd">Password</label>
              <input type="password" className="form-control" name='password' placeholder="Enter Password"/>
              <span className="input-group-btn">
                <button className="btn btn-default reveal" type="button"><i className="glyphicon glyphicon-eye-open"></i></button>
              </span>
            </div>
            <div style={{ marginTop: '-18px' }}>
              <i class="fa-solid fa-lock me-3"></i>
              <label className="form-label" htmlFor="form3Example4cd">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" name='confirmpassword' />
              <span className="input-group-btn">
                <button className="btn btn-default reveal" type="button"><i className="glyphicon glyphicon-eye-open"></i></button>
              </span>
            </div>
            <div className="text-center text-lg-start pt-2">
              <button type="submit" className="btn btn-primary sb btn-lg "
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>SignUp</button>
              <p className="small fw-bold mt-2 pt-1 mb-0 ms-3">Already have an account?<Link to={`/login`} className='text-center l ms-2'>LOGIN</Link></p>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Signupform
