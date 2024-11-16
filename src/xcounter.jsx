import {useState} from "react"
const Counter = () => {
    const [count,setCount] = useState(0)
    const increaseCount = () => {
        setCount(prev => prev+1)
    }
    const decreaseCount = () => {
        setCount(prev => prev-1)
    }
    return (
        <div style = {{fontFamily:"serif"}}>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick = {increaseCount}>Increment</button>
            <button onClick = {decreaseCount}>Decrement</button>
        </div>
    )
}
export default Counter