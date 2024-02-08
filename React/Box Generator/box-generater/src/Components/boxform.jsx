import React,{useState} from "react";
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [ArrayColor,setArrayColor] = useState([]);
    
    const handleSubmit = (e) => {

        e.preventDefault();
        props.changeColor(ArrayColor);
       
    };
    const AddElemnt = () => {
        const newarray = [...ArrayColor,color];
        setArrayColor(newarray);
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>Set Color</label>
            <input type="text" value={color} onChange={e => setColor (e.target.value)}></input>
            
            <input type="submit" onClick={() => {AddElemnt(); setColor("");}} value="Send Color" />

        </form>
    );
};
    
export default BoxForm;
