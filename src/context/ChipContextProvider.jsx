import React, { useState } from 'react'
import ChipContext from './ContextContext'

const ChipContextProvider = ({children}) => {
        const [chips, setChips] = useState([])
    const [input, setInput] = useState('')
    const delteChip = (id) => {
            const newChips = chips.filter((chip) => {
                return chip.id != id
            })
            setChips(newChips)
        }
        const addChip = (e) => {
            if (e.key == "Enter" && input) {
                setChips(prev => ([
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        name: input
                    }
                ]))
                setInput('')
            }
        }
  return (
      <ChipContext.Provider value={{ chips, input ,setInput,delteChip,addChip}}>
          {children}
      </ChipContext.Provider>
  )
}

export default ChipContextProvider
