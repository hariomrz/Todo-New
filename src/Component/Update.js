import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Add = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [education, setEducation] = useState('')
    const [skills, setSkills] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const params =  useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`https://63e71694c3781dbb580c905e.mockapi.io/demodata/${params.id}`)
            .then((response) => {
                console.log(response.data)
                setFirstname(response.data.firstname);
                setLastName(response.data.lastname);
                setEducation(response.data.education);
                setSkills(response.data.skills);
                setContact(response.data.contact);
                setEmail(response.data.email);
            })
    }, [])
    
    const updateData=(e)=>{
     e.preventDefault()
    
     axios.put(`https://63e71694c3781dbb580c905e.mockapi.io/demodata/${params.id}`, {
        firstname,
        lastname,
        education,
        skills,
        contact,
        email 
    }).then((res)=>{
        console.log(res.data)
        navigate('/')
    }).catch((error)=>{
        console.log('Error', error)
    })

    }
  
  return (
    <div className='wrapper'>
      <form className='formdata' onSubmit={updateData}>
        <div>
            <label>Name<sup>*</sup></label>
            <input type='text' className='form-control' name='firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>

        </div>
        <div>
            <label>LastName<sup>*</sup></label>
            <input type='text' className='form-control' name='lastname' value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
        </div>
        <div>
            <label>Education<sup>*</sup></label>
            <select className='form-select' name='education' value={education} onChange={(e)=> setEducation(e.target.value)}>
            <option></option>
            <option>UG</option>
            <option>PG</option>
            <option>Diploma</option>
            </select>
        </div>
        <div>
            <label>Skills<sup>*</sup></label>
            <input type='text' className='form-control' name='skills' value={skills} onChange={(e)=> setSkills(e.target.value)} />
        </div>
        <div>
            <label>Contanct<sup>*</sup></label>
            <input type='text' className='form-control' name='contact' value={contact} onChange={(e)=> setContact(e.target.value)} />
        </div>
        <div>
            <label>Email<sup>*</sup></label>
            <input type='text' className='form-control' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='d-grid mt-3'>
            <button className='btn btn-outline-success' type='submit'>Update</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
