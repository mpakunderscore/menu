import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/filter.css'

const Filter = (props) => {

    let [filterItems, setFilterItems] = useState([
        {name: 'Favorites'},
        {name: 'Random'},
        {name: 'Breakfast'},
        {name: 'Soup'},
        {name: 'Dessert'},
        {name: 'Veg'},
    ])

    useEffect(() => {
        // let userRecipes = shuffleArray(recipes)
        // let userRecipes = recipes
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)
    }, [])

    return (
        <div id={'filter'}>
            {filterItems.map((name, i) => {
                let itemTitle = filterItems[i] ? filterItems[i].name.toUpperCase() : 'NO TITLE'
                let hover = false
                return <div key={i}
                            className={hover ? 'hover' : ''}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}
                            onClick={() => props.setCurrentRecipe(filterItems[i])}>
                    <div className={'title'}>{itemTitle}</div>
                    {/*<img title={userRecipes[i].name} src={'./images/food/' + userRecipes[i].image}/>*/}
                </div>
            })}
        </div>
    )
}

export default Filter;