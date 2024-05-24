
import React, { useState } from 'react';

const Final = ()=>{
        const [list,setList] = useState([]);
    const [message,setMessage] = useState(
        {
        text:"",
        id:""
        }
    );

    const changeMessage = (e) => {
        setMessage({
        ...message,
        text:e.target.value,
        });
        
    };

    const handleAdd = (e) => {
        e.preventDefault();
        let newTodo = {
        text:message.text,
        id:new Date().getTime().toString(),
        };
        setList([...list,newTodo]);
        setMessage({
        text:"",
        id:"",
        });
    };

    const handleDelete = (id) => {
        let newTodos = list.filter((eachItem) => {
        return eachItem.id!=id;
        });
        setList(newTodos);
    };

    return ( 
        <div className='todo'>
        <form>
            <input className='message' 
            type='text' 
            name='message' 
            id='message'
            placeholder='Enter the item'
            value={message.text}
            onChange={changeMessage}
            />
            <button onClick={handleAdd} type='submit' className='addButton'>Add</button>
        </form>
        <hr />
        <ul>
            {
            list.map((eachItem) =>{
                const {text,id}=eachItem;
                return(
                <li key={id}>
                    <span className='message'>{text}</span>
                    <button className='editButton'>Edit</button>
                    <button className='delButton' onClick={()=>handleDelete(id)}>Delete</button>
                </li>
                )
            })
            }
        </ul>
        </div>
    );
}

export default Final;