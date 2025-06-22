import React , { useState } from "react";
import './color.css';

const Calculator =()=>{
const [count,setcount]=useState('');
    return(

      <center>
          <h1 style={{color:"black"}}>Calculator</h1>;
<div className="container">
    <div className="cal">
    <div className="display"  >
        <input className="screen" type="text" value={count} />
    </div>
    <div>
       <input type="button" value='AC' onClick={e =>setcount('')} style={{backgroundColor:'green'}}  />
       <input type="button" value='DE' onClick={e =>setcount(count.slice(0,-1))} style={{backgroundColor:'red'}} />
       <input type="button" value='.' onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='/' onClick={e =>setcount(count +e.target.value)} />
    </div>
    <div>
       <input type="button" value='7' onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='8'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='9'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='*'  onClick={e =>setcount(count +e.target.value)} />
    </div>
    <div>
       <input type="button" value='4'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='5'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='6'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='+'  onClick={e =>setcount(count +e.target.value)} />
    </div>
    <div>
       <input type="button" value='1' onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='2'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='3'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='-'  onClick={e =>setcount(count +e.target.value)} />
       </div>
       <div>
       <input type="button" value='00'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='0'  onClick={e =>setcount(count +e.target.value)} />
       <input type="button" value='='  onClick={e => setcount(eval(count))} style={{width:"30%"}} />
    </div>
    </div>
    </div>
    </center>
         
    )
    
}
export default Calculator;