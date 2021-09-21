import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';

function Dashboard() {
  let history = useHistory();
  let {id} = useParams()
  const [value, setValue] = useState([]);
  console.log(value, 'mydata');
  useEffect(() => {
    axios
      .get('https://reqres.in/api/unknown')
      .then((res) => {
        setValue(res?.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = () =>{
      localStorage.removeItem('Token')  
      window.setTimeout(() => {
        history.push('/login')
      }, 500)
  }
  //getting users
  const getUser = (id) => {
      console.log(id)
      history.push(`/user/${id}`)
  }

  return (
    <>
    <div class="container">
        <div className="pos-r">
            <h1 className="my-4 text-center">Welcome To Dashboard</h1>
            <button className="btn btn-dark" onClick={logout}>Logout</button>
        </div>
      
        <h2 className="text-center mb-4">API DATA</h2>

        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>COLOR</th>
              <th>Name</th>
              <th>PANTONE VALUE</th>
              <th>YEAR</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.color}</td>
                    <td>{item.name}</td>
                    <td>{item.pantone_value}</td>
                    <td>{item.year}</td>
                    <td>
                        <button onClick={() => getUser(item.id)} type="button" className="btn btn-primary">User Detail</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
