import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
function Home() {
  const {id} = useParams();
  const [formData, setFormData] = useState({user_name:"", user_email:" ", age:"",country:"",image:""})
  const[mainId,setMainId]=useState()
   const token = localStorage.getItem('token')
 const navi = useNavigate()

useEffect(() => {
  axios.get(`http://localhost:4000/api/auth/getuser/${id}`).then((res) => {
    if (id) {
      setFormData({
        user_name: res.data.user_name,
        user_email: res.data.user_email,
        age: res.data.age,
        country: res.data.country,
        image: res.data.image,
      });
      console.log(formData.user_email)
    }
  });
}, [id]);

useEffect(() => {
  if (id) {
    axios.post('http://localhost:4000/api/auth/authentication', { token }).then((res) => {
      setMainId(res.data._id);
    });
  }
}, [id]);

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    user_name: e.target.user_name.value.trim(),
    user_email: e.target.user_email.value.trim(),
    age: e.target.age.value.trim(),
    country: e.target.country.value.trim(),
    image: e.target.image.files[0],
    creator: mainId,
  };

  axios.post('http://localhost:4000/api/auth/authentication', { token }).then((res) => {
    const auth = res.data;

    if (auth) {
      axios
        .post('http://localhost:4000/api/auth/create', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Error');
    }
  });
};

const handleUpdate = (e) => {
  e.preventDefault();
  const data = {
    user_name: e.target.user_name.value.trim(),
    user_email: e.target.user_email.value.trim(),
    age: e.target.age.value.trim(),
    country: e.target.country.value.trim(),
    image: e.target.image.files[0],
    creator: mainId,
  };

  axios.post('http://localhost:4000/api/auth/authentication', { token }).then((res) => {
    const auth = res.data;

    if (auth) {
      axios.put(`http://localhost:4000/api/auth/update_user/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          navi('/view')
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Error');
    }
  });
};
  return (
    <>
     <Navbar/> 
     <div >
    
     
  <div className='sign reg mx-auto'>
    {id?(<h2 className='my-4 text-center fs-1 py-3'>Edit Employee Data</h2>):(<h2 className='my-4 text-center fs-1 py-3'>Register Employee</h2>
)}
          <form onSubmit={id ? handleUpdate: handleSubmit}>
            <i class="fa-solid fa-user me-3"></i>
            <label className="form-label">Employee Name</label>
            <input type="text" id="form3Example3" name='user_name'  defaultValue={id ? formData.user_name : ""} className="form-control form-control-lg"
              placeholder="Enter Name" required />
            <i class="fa-solid fa-envelope me-3"></i>
            <label className="form-label mt-2" for="form3Example3">Email</label>
            <input type="email" id="form3Example4" name='user_email'  value={id ? formData.user_email : ""} className="form-control form-control-lg"
              required />
            <i class="fa-solid fa-calendar me-3" me-3></i>
            <label className="form-label mt-2" for="form3Example3">Age</label>
            <input type="number" id="form3Example4" name='age'  defaultValue={id ? formData.age : ""} className="form-control form-control-lg"
              placeholder="Enter Age" required />
            
            <i class="fa-solid fa-earth-asia me-3"></i>
            <label className="form-label mt-2" for="form3Example3">Country</label>
            <input type="text" id="form3Example4" name='country'  defaultValue={id ? formData.country : ""} className="form-control form-control-lg"
              placeholder="Enter Country" required />
           {id? (<div className="mb-4">
           <i className="fas fa-image fa-lg me-3 fa-fw"></i>
                    <label className="form-label" htmlFor="form3Example4c">Image URL</label>
                      <input type="text" id="form3Example4c" name="imageURL"  defaultValue={id ? formData.image : ""}  className="form-control" />
              </div>):null}
         <div className="mb-4">
                <i className="fas fa-image fa-lg me-3"></i>
                <label className="form-label" htmlFor="customFile">Image</label>
                <input type="file" className="form-control" id="customFile" name='image'  />
              </div>
            {id?(<div className="text-center text-lg-start pt-2">
            <button type='submit' className="btn-reg btn-light mb-4 py-3 px-5 fw-bold">Update</button>

            </div>):(<div className="text-center text-lg-start pt-2">
            <button type='submit' className="btn-reg btn-light mb-4 py-3 px-5 fw-bold">Register</button>

            </div>)}
            

          </form>
        </div>
</div>
    </>
  )
}

export default Home
