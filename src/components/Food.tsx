import React, {useState, useEffect, useReducer, useRef} from "react";
import {items} from "../data/items";
import {inspect} from "util";


const Food = (props) => {

    let imagesCount = 22
    const food = Array.from(Array( imagesCount + 1).keys()).slice(1);

    return (
        <div id={'food'}>
            {food.map((name, i) => {
                let itemTitle = items[i]
                return <div key={i} onClick={() => props.setCurrentRecipe(items[i])}>
                    <div className={'title'}>{itemTitle ? itemTitle.toUpperCase() : 'NO TITLE'}</div>
                    <img key={i} title={items[i]} src={'./images/food/' + name + '.png'}/>
                </div>
            })}
        </div>

    )

}

export default Food;