import React,{useState} from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conform, setConform] = useState(""); 

 
  return (
    <>
    <form >
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Conform Password: </label>
                <input type="text" onChange={ (e) => setConform(e.target.value) } />
            </div>
    </form>
    <p>First Name: {firstname}</p>
    <p>Last Name: {lastname}</p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
    <p>Conform Password: {conform}</p>
    </>
  )
}

export default UserForm 