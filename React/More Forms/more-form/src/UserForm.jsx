import React,{useState} from 'react'

const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conform, setConform] = useState("");
    const [conformError, setConformError] = useState("");
    

    const handleFirst = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstError("must be at least 2 characters.");
        } else {setFirstError("");}
    }

    const handleLast = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastError("must be at least 2 characters.");
        } else {setLastError("");}
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("the field must be at least 5 characters.");
        } else {setEmailError("");}
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("the field must be at least 8 characters.");
        } else {setPasswordError("");}
    }

    const handleConformPassword = (e) => {
        setConform(e.target.value);
        if(e.target.value.length < 8) {
            setConformError("the field must be at least 8 characters.");
        } else {setConformError("");}
    }

   

  return (
    <>
    <form >
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (handleFirst)  } />
                {
                    firstError ?
                    <p>{ firstError }</p> : ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (handleLast) } />
                {
                    lastError ?
                    <p>{ lastError }</p> : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (handleEmail)  } />
                {
                    emailError ?
                    <p>{ emailError }</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (handlePassword)} />
                {
                    passwordError ?
                    <p>{ passwordError }</p> : ''
                }
            </div>
            <div>
                <label>Conform Password: </label>
                <input type="text" onChange={ (handleConformPassword)} />
                {
                    conformError ?
                    <p>{ conformError }</p> : ''
                }
            </div>
    </form>
    </>
  )
}

export default UserForm