import React, {useState, useEffect, useReducer, useRef} from "react";
import {items} from "./Items";

const Food = () => {

    let food = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

    return (
        <div id={'food'}>
            {food.map((name, i) => {
                return <div>
                    <div>{items[i]}</div>
                    <img key={i} title={items[i]} src={'./images/food/' + name + '.png'}/>
                </div>
            })}
        </div>

    )

}

export default Food;