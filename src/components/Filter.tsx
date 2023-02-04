import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/filter.css'

const Filter = (props) => {

    let [filterItems, setFilterItems] = useState([
        {name: 'your Favorites'},
        {name: 'this Soup'},
        {name: 'late Breakfast'},
        {name: 'Easy make'},
        {name: 'i want Dessert'},
        {name: 'is this Veg'},
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