import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [education, setEducation] = useState('')
    const [skills, setSkills] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)  
    const navigate = useNavigate()

    const postData=(e)=>{
     e.preventDefault()
     if(!firstname || !lastname || !education || !skills || !contact || !email){
        setError(true)
        return false
     }
     axios.post(`https://63e71694c3781dbb580c905e.mockapi.io/demodata`, {
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
      <form className='formdata' onSubmit={postData}>
        <div>
            <label>Name<sup>*</sup></label>
            <input type='text' className='form-control' name='firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
            {error && !firstname && <p className='errormsg'>Please Enter Name</p>}

        </div>
        <div>
            <label>LastName<sup>*</sup></label>
            <input type='text' className='form-control' name='lastname' value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
            {error && !lastname && <p className='errormsg'>Please Enter Lastname</p>}
        </div>
        <div>
            <label>Education<sup>*</sup></label>
            <select className='form-select' name='education' value={education} onChange={(e)=> setEducation(e.target.value)}>
            <option></option>
            <option>UG</option>
            <option>PG</option>
            <option>Diploma</option>
            </select>
            {error && !education && <p className='errormsg'>Please select education</p>}
        </div>
        <div>
            <label>Skills<sup>*</sup></label>
            <input type='text' className='form-control' name='skills' value={skills} onChange={(e)=> setSkills(e.target.value)} />
            {error && !skills && <p className='errormsg'>Please Enter skills</p>}
        </div>
        <div>
            <label>Contanct<sup>*</sup></label>
            <input type='text' className='form-control' name='contact' value={contact} onChange={(e)=> setContact(e.target.value)} />
            {error && !contact && <p className='errormsg'>Please Enter contact</p>}
        </div>
        <div>
            <label>Email<sup>*</sup></label>
            <input type='text' className='form-control' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            {error && !email && <p className='errormsg'>Please Enter email</p>}
        </div>
        <div className='d-grid mt-3'>
            <button className='btn btn-outline-success' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
