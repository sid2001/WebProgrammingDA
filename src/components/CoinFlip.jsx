import { useState } from "react";
import "/src/styles/flipcoin.css";

function CoinFlip(){
    const [result,setResult] = useState(null);
    const [heads,setHeads] = useState(0);
    const [tails,setTails] = useState(0);

    function flipCoin(){
        const date = new Date();
        const time = date.getTime();
        const val = parseInt(time)%10;
        const res = parseInt(val)%2;
        switch(res){
            case 0:
                setResult('tails');
                setTails((t)=>{
                    return(
                        parseInt(t)+1
                    )
                })
                break;
            case 1:
                setResult('heads');
                setHeads((h)=>{
                    return(
                        parseInt(h)+1
                    )
                })
                break;
        }
    }
    return(
        <div id='coin-flip-wrapper'>
            <div id="coin">
                <div id="face">
                    {result==='tails'?'Tail':(result==='heads'?'Heads':'Flip Coin')}</div>
                </div>
            <button id="flip-button" onClick={flipCoin}>
                Flip
            </button>
            <div id='scores'>
                <div id='info'>
                <div id="count-head" className="count">
                    Heads: {heads}
                </div>
                <div id="count-tail" className="count">
                    Tails: {tails}
                </div>
                </div>
                
                <div id="result">
                    Result: {result}
                </div>
            </div>
        </div>

    )
}

export default CoinFlip;