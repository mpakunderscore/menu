import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/food.css'

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

let userRecipes = shuffleArray(recipes)

const Food = (props) => {

    return (
        <div>
            <div id={'food-title'}>AMENU 0.2</div>
            <div id={'food'}>
                {userRecipes.map((name, i) => {
                    let itemTitle = recipes[i] ? recipes[i].name.toUpperCase() : 'NO TITLE'
                    let hover = false
                    return <div key={i}
                                className={hover ? 'hover' : ''}
                                onTouchStart={() => hover = true}
                                onTouchEnd={() => hover = false}
                                onClick={() => props.setCurrentRecipe(recipes[i])}>
                        <div className={'title'}>{itemTitle}</div>
                        <img title={recipes[i].name} src={'./images/food/' + recipes[i].image}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Food;