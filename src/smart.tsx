import React ,{useRef, useState} from "react";
const Watch=()=>{
    const timeid=useRef(0);
     const data=new Date;
  
    const [count,setcount]=useState(0);
     const [count2,setcount2]=useState('');
      function settime(){
        timeid.current=setInterval(()=>{setcount(count => count+1)},100)
    }
    function cleartime(){
      clearInterval(timeid.current);

    }
    setInterval(()=>{  const data=new Date; setcount2(  data.toLocaleTimeString())},1000)
    

    return(
   <div>
      <h1>Watch</h1>
       <p>{count}</p>
       <div className="display" style={{backgroundColor:"black"}}>
        <h2>{count2}</h2>

       </div>

       <button onClick={settime}>start</button>
       <button onClick={cleartime}>Stop</button>
       </div>
    );
  


} ;
export default Watch;
