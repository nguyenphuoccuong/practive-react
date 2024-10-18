import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ApiComponent () {
  const [user,setUser] = useState ([])
  
  const [data,setdata] = useState ('')

  const handleSearch = (e) => {
    setdata(e.target.value);
  }
  
  const filData = data === '0' ? user : data?
  user.filter((user) => user.id === parseInt(data)): user;
  
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      setUser(data)
    })
  },[])


  return (
      <div>
          <input type="text" name="search" placeholder='Search' onChange={handleSearch}/>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
              {
                filData.map((value,key)=>(
                  <tr key={key}>
                    <td>{value.id}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.address.street}</td>
                    <td>{value.phone}</td>
                  </tr>
                ))
              }
                
            </tbody>
          </Table>
      </div>  
    )
}

export default ApiComponent;