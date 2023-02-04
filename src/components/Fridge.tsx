import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/fridge.css'
import {getSortedIngredients, ingredientsObjects} from "../data/ingredients";

const Fridge = (props) => {

    window.scrollTo(0, 0);

    let [ingredients, setIngredients] = useState(ingredientsObjects)
    let [ingredientsActive, setIngredientsActive] = useState({})

    useEffect(() => {
        // let userRecipes = shuffleArray(recipes)
        // let userRecipes = recipes
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)

    }, [])

    let clickIngredient = (name) => {
        console.log(name)
        ingredientsActive[name] = !ingredientsActive[name]
        setIngredientsActive({...ingredientsActive})
        console.log(ingredientsActive)
    }

    return (
        <div id={'fridge'}>
            {ingredients.map((name, i) => {
                let itemTitle = ingredients[i] ? ingredients[i].name.toUpperCase() : 'NO TITLE'
                let hover = false
                let active = ingredientsActive[ingredients[i].name]
                return <div key={i}
                            className={(active ? 'active' : '') + (hover ? ' hover' : '')}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}
                            onClick={() => clickIngredient(ingredients[i].name)}>
                    <div className={'title'}>{active ? itemTitle : itemTitle}</div>
                </div>
            })}
        </div>
    )
}

export default Fridge;