import React, { useState } from "react";
import  './App.css';

const App = () =>{
    const [result, setResult] = useState("")

    const baseclick = (e) =>{
        setResult(result.concat(e.target.name ))
    }

    const clear = () =>{
        setResult("")
    }

    const backspace = () =>{
        setResult(result.slice("",-1))
    }

    const evaluate = () =>{

        try{
        setResult(eval(result).toString())
        }
        
        catch(err){
            setResult("")
        }
    }
   
    return(
        <div className="container">
            <form >
                <input className='input' type="text" value={result}/>
            </form>

            <div className="keypad">
                <button name="1" onClick={baseclick}>1</button>
                <button name="2" onClick={baseclick}>2</button>
                <button name="3" onClick={baseclick}>3</button>
                <button name="4" onClick={baseclick}>4</button>
                <button name="5" onClick={baseclick}>5</button>
                <button name="6" onClick={baseclick}>6</button>
                <button name="7" onClick={baseclick}>7</button>
                <button name="8" onClick={baseclick}>8</button>
                <button name="9" onClick={baseclick}>9</button>
                <button name="0" onClick={baseclick}>0</button>
                <button name="+" onClick={baseclick}>+</button>
                <button name="-" onClick={baseclick}>-</button>
                <button name="*" onClick={baseclick}>X</button>
                <button name="/" onClick={baseclick}>/</button>
                <button name="=" onClick={evaluate}>=</button>
                <button name="C" onClick={clear} id="clear">C</button>
                <button name="CE" onClick={backspace} className="backspace">CE</button>
                <button name="." onClick={baseclick}>.</button>


            </div>
        </div>
    )
}
export default App