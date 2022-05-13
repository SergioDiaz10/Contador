import { useState } from "react";

function App() {
  const [cuenta, setCuenta]= useState(0);
  const [paso, setPaso]= useState(1);

 const handleClick = ()=> {
    console.log(paso);
    setCUenta(cuenta-paso);
  };
  const handleClick1 = ()=> {
    setCuenta(0);
    setPaso(1);
  };

  const handleClick0 = ()=> {
    setCuenta(cuenta +paso);
  };
  const handleInputCHange =(e)=>{
    if(isNaN(e.target.value)){
      return;
    }
    setPaso(Number(e.terget.value));
  };

  return (
    <div className="App">
      <div>
    <h3>Contador</h3> 
    <hr />
    <h2 className="text-center">{cuenta}</h2>
    <hr />
    <div 
    style={{
      display:"flex",
      justifyContent:"flex-end",
      marginRight:"5px",
    }}
      >
        <div class="input-group me-3">
    
    </div>
  );
}

export default App;