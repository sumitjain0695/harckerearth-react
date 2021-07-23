import React from 'react'
import './styles/quantity-btn.css'
function QuantityButton(props) {
    return (
        <div className="btn-container">
            <div>
            <span className="btn-left" onClick={()=>props.decreaseAmount()}> 
            −
             </span>
            <p className="btn-mid"> {props.quantity}</p>
            <span className="btn-right" onClick={()=>props.increaseAmount()}> 
             +
             </span>

             </div>
        </div>
    )
}
export default QuantityButton