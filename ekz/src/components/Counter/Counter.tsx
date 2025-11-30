import { useState } from "react"
import { ButtonBox } from "./button/ButtonBox"
import { Display } from "./display-counter/Display"


type CounterProps = {
    startValue: number
    maxtValue: number
}

export const Counter = ({startValue,maxtValue} : CounterProps) => {
    
    const [counter, setCounter] = useState(startValue)
    const setValueHandler = () => {
        if (counter < maxtValue) {
            setCounter(counter + 1)
        }
    }
    const resetValueHandler = () => { setCounter(startValue) }

    return (
        <div className="container-counter">
            <Display countValue={counter} isFull={counter === maxtValue ? 1 : 0 } />
            <ButtonBox
                setValue={setValueHandler}
                resetValue={resetValueHandler}
                startValue={counter}
                maxValue={maxtValue}
            />
        </div>
    )
    
}

