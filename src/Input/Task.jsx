import React from 'react';
function Task() {
    const [query,setquery] = React.useState("");
    const [tasks,setTasks] = React.useState("");
    const handleChange = (e) =>{
        const {value} = e.target;
        setquery(value);
    };
    const handleadd =( ) =>{
        const playload = {
            title:query,
            status: false
        };
        let newtask = [...tasks,playload];
        setTasks(newtask)
    }
    console.log(tasks)
    return (
        <div>
            <h1>task</h1>
        
        
        <input  value={query} onChange={handleChange} placeholder='add something'/>
        <button onClick={handleadd }>ADD</button>
       
       
        
             {tasks.map((item) => {
               return <div> {item.title}</div>;
             })}
      </div>
    );
}

export {Task};