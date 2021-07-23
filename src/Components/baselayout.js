import React from 'react'
import Itemstable from './Items/table'
import TotalCalc from './Total/total'

function Baselayout(props) {
    return (
        <div>
            <p><span>&#8249;</span> Order Summary</p>
            <hr/>

            <div><Itemstable/></div>

            <div><TotalCalc/></div>
        </div>
    )
}

export default Baselayout