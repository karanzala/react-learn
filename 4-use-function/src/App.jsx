import { useState } from 'react'

function App() {
  const [data, setData] = useState();
  const [active, setActive] = useState(false);

  // function handleClick(){
  //   console.log("Button double clicked!");
  // }
  const getValue = () =>{
    setActive(true)
  }

  const buttonClear = () =>{
    setData("");
    setActive(false);
    document.getElementById("name").value = "";
  }

  function handleScroll(e){
    console.log(e);
    if(e>0){
      console.log("Scroll down");
    }else{
      console.log("Scroll up");
    }
    
  }

  return (
    <>
      <div>
        <h1>Hello, React! use function</h1>
        <input
          type="text"
          name=""
          onChange={(e) => {
            setData(e.target.value);
            setActive(false);
          }}
          id="name"
        />
        {/* <button onClick={getValue} onDoubleClick={handleClick}> */}
        <button onClick={getValue}>Click me</button>
        <button onClick={buttonClear}>Clear</button>
        {active && <p>{data || "No data available"}</p>}

        <div className="wrap" onWheel={(event) => handleScroll(event.deltaY)}>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </>
  );
}

export default App
