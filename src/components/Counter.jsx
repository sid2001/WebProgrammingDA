import { useState } from "react";
import "/src/styles/counter.css";
function Counter() {
    const [count,setCount] = useState(0);
    function clickHandler(){
        setCount((c)=>{
            return parseInt(c)+1;
        })
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
            <div>
                <button className="count-btn" style={{
                    "margin":"20px"
                }} onClick={clickHandler}>
                    Click: {count}
                </button>
                <button className="count-btn" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter;