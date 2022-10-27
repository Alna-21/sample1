
import './App.css';
import Button from "./components/Button"
import Input from "./components/input"
import { useState } from 'react';

const App=()=> {
  const[text,setText]=useState("");


  const addTotext=(val)=>{
    setText((text)=> [...text,val+""]);

  };
  const resetInput=()=>{
    setText("");
  
  };
 
  const enterOutput=(text)=>{
    
   if (setText==1234){
      alert("Your are enter correct pin");
     }else{
        alert("Wrong Pin")
      }
     
  };
  

  

  return (
    <div className="App">
      <div className="lockerPin">
        <Input text={text} />

        <div className="row">
      <Button symbol="7" onClick={addTotext}/>
      <Button symbol="8" onClick={addTotext}/>
      <Button symbol="9" onClick={addTotext}/>
      </div>

      <div className="row">
      <Button symbol="4" onClick={addTotext}/>
      <Button symbol="5" onClick={addTotext}/>
      <Button symbol="6" handleClick={addTotext}/>
      </div>

      <div className="row">
      <Button symbol="1" onClick={addTotext}/>
      <Button symbol="2" onClick={addTotext}/>
      <Button symbol="3" onClick={addTotext}/>
      </div>

      <div className="row">
      <Button symbol="C" onClick={resetInput}/>
      <Button symbol="0" onClick={addTotext}/>
      <Button symbol="Enter" color="orange" onClick={enterOutput} />
      </div>

      </div>
    </div>
  );
};

export default App;
