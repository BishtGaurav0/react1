import React ,{useState}from 'react'
import Function from './Function.js';
import Class from './Class.js';
import './Main.css'

 function Main() {
     const[Ffunction,setFunction]=useState(false);
     const[Cclass,setClass]=useState(false);
    return (
        <div classname="parent">
            <div>
                <h1 className='heading'>Styling using Function and Child Component</h1>
             </div>
            <div className='butn'>
             <button className='f-but' onClick={()=>setFunction(!Ffunction)}>To see styling in function component </button>
             <button className='c-but' onClick={()=>setClass(!Cclass)}>To see styling in class component</button>
            </div>
            <div>
                <div className='function'> 
                      {Ffunction && <Function/>}
                </div>
                <div className='Class'>
                     {Cclass && <Class/>}
                </div>
            </div>
        </div>
    );
}
export default Main;