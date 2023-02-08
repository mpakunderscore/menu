import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/fridge.css'
import {colors, getSortedIngredients, ingredientsObjects} from "../data/ingredients";
import {getIngredients, setIngredient} from "../utils/storage";
import {ingredientsType} from "../data/types";

const Fridge = (props) => {

    window.scrollTo(0, 0);

    let [ingredients, setIngredients] = useState([])
    let [ingredientsActive, setIngredientsActive] = useState(getIngredients())

    let [ingredientsByType, setIngredientsByType] = useState({})
    let [types, setTypes] = useState([])

    useEffect(() => {

        let sortedIngredients = {'NO TYPE': []}
        ingredientsObjects.map((item, i) => {

            let name = ingredientsObjects[i].name
            let type = ingredientsType[name]

            if (type) {
                type = type.toLowerCase()
                if (!sortedIngredients[type]) {
                    sortedIngredients[type] = []
                }
                sortedIngredients[type].push(ingredientsObjects[i])
            } else {
                sortedIngredients['NO TYPE'].push(ingredientsObjects[i])
            }

            setIngredientsByType(sortedIngredients)
            console.log(sortedIngredients)

            // Object.entries(sortedIngredients)
            let sorted = Object.keys(sortedIngredients).sort(function(a,b) {
                return sortedIngredients[b].length - sortedIngredients[a].length
            })
            // Object.entries()
            console.log(sorted)
            setTypes(sorted)

            // console.log(sortedIngredients)
            // let itemsLeft = []
            // sortedIngredients['NO TYPE'].map(item => {
            //     itemsLeft.push(item.name)
            // })
            // console.log(itemsLeft)
        })

        // let userRecipes = shuffleArray(newRecipes.tsx)
        // let userRecipes = newRecipes.tsx
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)

    }, [])

    const fridgeText = 'Please select the ingredients you have and I will select the newRecipes.tsx for you'

    let clickIngredient = (name) => {
        // console.log(name)
        ingredientsActive[name] = !ingredientsActive[name]
        setIngredient(name, ingredientsActive[name])
        setIngredientsActive({...ingredientsActive})
        // console.log(ingredientsActive)
    }

    return (
        <div id={'fridge'}>

            {types.map((type) => {

                return <div key={type} className={'grid'}>

                    <span>{type.toUpperCase() + 'S'}</span>

                    {ingredientsByType[type] ? ingredientsByType[type].map((name, i) => {
                        let itemTitle = ingredientsByType[type][i] ? ingredientsByType[type][i].name.toUpperCase() : 'NO TITLE'
                        let hover = false
                        let active = ingredientsActive[ingredientsByType[type][i].name]
                        let color = colors[ingredientsByType[type][i].name] ? colors[ingredientsByType[type][i].name] : '#e128e1'
                        return <div key={i}
                                    className={(active ? 'active' : '') + (hover ? ' hover' : '')}
                                    style={{background: (active ? '#202020' : '')}}
                                    onTouchStart={() => hover = true}
                                    onTouchEnd={() => hover = false}
                                    onClick={() => clickIngredient(ingredientsByType[type][i].name)}>
                            <div className={'title'} style={{color: (active ? color : '')}}>{active ? itemTitle : itemTitle}</div>
                        </div>

                    }) : ''}

                </div>
            })}
        </div>
    )
}

export default Fridge;