import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";


const Food = (props) => {

    return (
        <div id={'food'}>
            {recipes.map((name, i) => {
                let itemTitle = recipes[i] ? recipes[i].name.toUpperCase() : 'NO TITLE'
                return <div key={i} onClick={() => props.setCurrentRecipe(recipes[i])}>
                    <div className={'title'}>{itemTitle}</div>
                    <img title={recipes[i].name} src={'./images/food/' + recipes[i].image}/>
                </div>
            })}
        </div>
    )
}

export default Food;