import { useState } from 'react'
import './Counter.css'

const Count = () => {

    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () => {
        if(count > 0){

            setCount(count - 1)
        }
    }

    return (
        <div>
            <div className='d-flex '>
                <div className="box-1">
                    <div className="box-2">
                        <div className="counter">
                            <h1>
                                {count}
                            </h1>
                            <button onClick={handleInc}>+</button>
                            <button onClick={handleDec}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Count;