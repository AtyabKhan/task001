import React from 'react';

function Dinner (props){
    return(
        <div>
            <h1>Today's Menu is {props.dishName }</h1>
            
            <h1>And {props.sweetDish} in Dessert</h1><hr/>
        </div>
    )
}
export default Dinner;