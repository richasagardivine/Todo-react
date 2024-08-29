import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
const Todo=()=>{
    const[data, setData]= useState('');
    const[item, setItem]= useState([]);
    function add(){
       setItem([...item,data])
       setData('');
    }
    function delt(){
     setItem([]);
    }
    function delt1(index){
     let arr=[...data];
     arr.splice(index,1);
     setItem(arr);
    }
    return(
        <div>
         <input type="text" placeholder="Enter the value" onChange={(e)=>setData(e.target.value)} value={data}/>
        <button onClick={add}>Add</button>
        <button onClick={delt}>Delete All</button>
        <ol>
            {
                item.map((item,index)=>(
                    <div key={index}>
                    <li>{item}<button onClick={delt1}>Delete</button></li>
                    </div>
                ))
            }
        </ol>
        </div>
    )
}
let root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todo/>)