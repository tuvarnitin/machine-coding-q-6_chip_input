import { useContext, useEffect } from "react";
import ChipsContext from "./context/ContextContext"
import { AiOutlineDelete } from "react-icons/ai";
import './index.css'

function ChipsInput() {
    const {chips,input,setInput,delteChip,addChip} = useContext(ChipsContext)
    
    useEffect(()=>{document.getElementById("input").focus()},[])
    return (
        <div className='main-container'>
            <h2>Chips Input</h2>
            <input
            id="input"
                type="text"
                placeholder="Type a chip and press enter"
                className="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addChip}
            />
            <div className="chip-container">
                {chips.length > 0 ? chips.map((chip, i) => {
                    return (
                        <h1 key={i}
                         className="chip"
                          >
                            {chip?.name}
                            <span onClick={() => delteChip(chip.id)}><AiOutlineDelete /></span></h1>
                    )
                })
                    : <p style={{opacity:0.6,margin:0,padding:0}}>No chips to show</p>
            }
            </div>
        </div>
    );
}

export default ChipsInput;