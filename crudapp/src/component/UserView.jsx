import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import '../View.css';

function UserView() {
    const [user, setUser] = useState(null);
    const [subuser,setsubuser]=useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
      const fetchData = async () => {
        try {
          const auth = await axios.post("http://localhost:4000/api/auth/authentication", { token });
          const user = auth.data;
          
          if (user) {
            console.log(user)
            setUser(user);
          }
        } catch (error) {
          console.error("Error fetching authentication:", error);
        }
      };
    
      fetchData();
    }, [token]);
    
    useEffect(() => {

     if(token){ axios.post("http://localhost:4000/api/auth/authentication", { token })
      .then(()=>{
        if (user && user._id) {
          axios.get(`http://localhost:4000/api/auth/view/${user._id}`)
            .then(res => {
              console.log(res.data);
             setsubuser(res.data)
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      
    }
    }, [user]);
    
    
    console.log('User Data:', user);
    

    const handleDelete = (id) => {
      axios.post("http://localhost:4000/api/auth/authentication", { token })
        .then((authResponse) => {
          const user = authResponse.data;
    
          if (user) {
            axios.delete(`http://localhost:4000/api/auth/del/${id}`)
              .then((res) => {
                console.log(res);
              
              })
              .catch((err) => {
                console.log('Error deleting user:', err);
              });
          } else {
            console.log('Authentication failed.');
          }
        })
        .catch((err) => {
          console.log('Error during authentication:', err);
        });
    };
    
    
    return (

        <>
        {token?
<div className='back'>
  <div>
     <h1 className='text-center py-3'>Employees Info</h1>
</div>
      <table>
      <thead>
    <tr>
      <th className='text-center py-2'>User Id</th>
      <th className='text-center py-2'>User</th>
      <th className='py-2 mx-2'>Age</th>
      <th className='py-2'>Country</th>
      <th colSpan='2' className="text-center py-2">Actions</th>
    </tr>
  </thead>
        <tbody>
          {subuser && (
            subuser.map((u,index)=>
            (  <tr key={u._id}>
              <td className='text-center'>{index}</td>
              <td>
                <div className="d-flex px-2 align-items-center">
                  <img
                    src={u.image}
                    alt="employe image"
                    className="rounded-circle "
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{u.user_name}</p>
                    <p className="mb-3">{u.user_email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{u.age}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{u.country}</p>
              </td>
              <td className="text-center">
                <Link to={`/update/${u._id}`} className='btn btn-success mx-2 px-4'>Edit</Link>
              </td>
              <td className="text-center">
                <button className='btn btn-danger mx-2' onClick={() => handleDelete(u._id)}>Delete</button>
              </td>
            </tr>))
           
          )}
        </tbody>
      </table>
    </div>:"not accessable"}
        </>
    )
}

export default UserView
