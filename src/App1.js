import { useState } from "react";

const Display = ({value})=> <div>{value}</div>

const Button = ({handleClick, text})=> <button  onClick={handleClick}>{text}</button>


const App = () => {
  const [value, setValue] = useState(0)
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allCLicks, setAllClicks] = useState([])
  // const [total, setTotal] = useState(0)

  // const setToValue = (newValue)=> ()=> {
  //   console.log('value now', newValue)
  //   setValue(newValue)
  // }

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
    console.log(first)
  }

  // const handleLeftClick= ()=> {
  //   setAllClicks(allCLicks.concat('L'))
  //   console.log('left before', left)
  //   const updateLeft = left +1
  //   setLeft(updateLeft)
  //   console.log('left after', updateLeft)
  //   setTotal(updateLeft + right)
  // }

  // const handleRightClick= ()=> {
  //   setAllClicks(allCLicks.concat('R'))
  //   const updateRight = right + 1
  //   setRight(updateRight)
  //   setTotal(left + updateRight)
  // }


// const [ click, setClick] = useState({
//   left:0,right:0
// })
// const handleLeftClick =() => {
//   setClick({...click, left:click.left +1})
// }
// const handleRightClick =() => {
//   setClick({...click, right:click.right +1})
// }
// const increaseByOne= () => setCounter(counter +1)
// const decreaseByOne= () => setCounter(counter - 1)
// const setToZero= () => setCounter(0)


  return (
    <>
    {/* <Display counter={counter}/>
    {left}
    <Button handleClick = {handleLeftClick} text="left"></Button>
    <Button handleClick = {handleRightClick} text="right"></Button>
    {right}
    <History allCLicks = {allCLicks}/>
    <p>Total : {total}</p> */}
    {/* <Button handleClick = {setToZero} text="Reset"></Button> */}
    <Display value =  {value}/>
    <Button handleClick = {()=> setToValue(1000)} text="thousand"></Button>
    <Button handleClick = {()=>setToValue(0)} text="reset"></Button>
    <Button handleClick = {()=>setToValue(value + 1)} text="increment"></Button>

  </>
  ) 
}

export default App;
