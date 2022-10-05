import React, {useState, useEffect, useReducer, useRef} from "react";

const Food = () => {

    let food = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div id={'food'}>
            {food.map(dish => {
                return (<img key={dish} src={'./images/food/' + dish + '.png'}/>)
            })}
        </div>

    )

}

export default Food;