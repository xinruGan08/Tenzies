import Die from './components/Die'
import Confetti from './components/Confetti'
import React, { useEffect } from 'react'
import { nanoid } from "nanoid"


export default function App() {

  function generateDice() {
    return new Array(10).fill(0).map(()=>({value:Math.ceil(Math.random()*6), isHeld:false,id:nanoid()}))
  }

  function updateDice(){
    const newDice = dice.map((die)=> die.isHeld? {...die}: {...die,value:Math.ceil(Math.random()*6)})
    setDice(newDice)
  }

  function reset(){
    setDice(()=>generateDice())
  }

  const [dice,setDice] = React.useState(()=>generateDice()) //ensuring this function run only one time 
  const buttonRef = React.useRef(null)

  const win = dice.every(die => die.value === dice[0].value && die.isHeld == true);
  React.useEffect(()=> win? buttonRef.current.focus():undefined,[win])


  function hold(id) {
    const newDice = dice.map(die => die.id == id? ({...die,isHeld:!die.isHeld}):({...die}))
    setDice(newDice)
  }

  const diceComponent = dice.map(({value,isHeld,id}) => <Die key={id} id={id} value={value} isHeld = {isHeld} toggle={hold}/>)

  const buttonName = win? "New Game" : "Roll"

  return (
    <main>
      {win?<Confetti/>:null}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div>
        {diceComponent}
      </div>
      <button className='roll-dice' ref = {buttonRef} onClick={win ? reset : updateDice}>{buttonName}</button>
    </main>
  )
}
