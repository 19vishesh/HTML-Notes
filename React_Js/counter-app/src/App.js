import React,{useState} from 'react'



function App(props) {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1)
  }
  const min = () => {
    return number > 0 ? setNumber(number - 1) : "";
    // if (number > 0) {
    //   setNumber(number - 1)
    // }
  }

  return (
    <>
      <button onClick={add}>+</button>
      <h3>{number}</h3>
      <button onClick={min}>-</button></>
  );
}

export default App;
