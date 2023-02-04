import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/fridge.css'
import {getSortedIngredients} from "../data/ingredients";

const Fridge = (props) => {

    let [ingredients, setIngredients] = useState(getSortedIngredients())

    useEffect(() => {
        // let userRecipes = shuffleArray(recipes)
        // let userRecipes = recipes
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)
    }, [])

    return (
        <div id={'fridge'}>
            {ingredients.map((name, i) => {
                let itemTitle = ingredients[i] ? ingredients[i].name.toUpperCase() : 'NO TITLE'
                let hover = false
                return <div key={i}
                            className={hover ? 'hover' : ''}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}>
                    <div className={'title'}>{itemTitle}</div>
                </div>
            })}
        </div>
    )
}

export default Fridge;