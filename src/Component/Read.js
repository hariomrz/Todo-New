import React, {useState, useEffect} from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Read = () => {
    const [data, setData] = useState([])
    const heading = ['Name', 'LastName', 'Education', 'Skills', 'Contanct', 'Email']
    
    const GetData=()=>{
        axios.get(`https://63e71694c3781dbb580c905e.mockapi.io/demodata`)
        .then((response) => {
            console.log(response.data)
            setData(response.data);
        })
    }

    useEffect(() => {
        
        GetData()
        
    }, [])

     const onDelete = (id) => {
       axios.delete(`https://63e71694c3781dbb580c905e.mockapi.io/demodata/${id}`)
        .then((res) => {
            GetData()
          }).catch((error) => {
            console.log("Error occured", error)
          })
      }

  return (
       <div>
       <Link to='/add' className='add'>Add Data</Link>
       <div className='Border table-responsive mt-4 mb-3'>
        <table className="table table-sm table-hover mb-0 tablecontent">
          <thead>
            <tr className='laptopheadings'>
              {
                heading.map((data, index) => (

                  <th key={index}>{data}</th>

                ))
              }
            </tr>
          </thead>
          <tbody >
           {
            data.map((item)=>{
                return <tr key={item.id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.education}</td>
                    <td>{item.skills}</td>
                    <td>{item.contact}</td>
                    <td>{item.email}</td>
                    <td ><Link to={"/update/" + item.id} className='bi bi-pen-fill' style={{ cursor: 'pointer', color: 'black' }}></Link></td>
                    <td className='bi bi-trash3-fill' style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(item.id)}></td>
                    
                </tr>
            })
           }
          </tbody>
        </table>
        </div>
    </div>
  );
}

export default Read;
