import React, {useState} from 'react';

const Tab2 = (props) => {
    const [tabName,setTabName] = useState("");
    function handleSubmit(e){
            e.preventDefault();
            props.onSubmit(tabName);
            setTabName("");
    }
    const handleText = (e) => {
         setTabName(e.target.value);
    }
  return (
   <form onSubmit ={handleSubmit}>
    <p>Tab Name</p>
    <input type= "text" name= "tab" onChange={handleText} value={tabName}/>
    <input type='submit' value="add"/>

   </form>
  ) 
}

export default Tab2