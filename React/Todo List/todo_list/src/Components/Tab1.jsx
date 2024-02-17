import React, {useState} from 'react'

const Tab1 = (props) => {
    const remove = (index) => {
         props.delet(index);
    }
  return (
   <>
   <ul>
    {
        props.tab.map((item, i) => (
            <li>
                <span>{item}</span>
                <input type='checkbox' style={{margin: "20px"}}/>
                <button onClick={() => remove(i)}>Delete</button>
            </li>
        ))
    }

   </ul>
   </>
  )
}

export default Tab1