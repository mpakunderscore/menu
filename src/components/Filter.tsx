import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/filter.css'

const Filter = (props) => {

    let [filterItems, setFilterItems] = useState([
        {title: 'Favorites', name: 'favorites'},
        {title: 'Easy', name: 'easy'},
        {title: 'Breakfast', name: 'breakfast'},
        {title: 'Vegetarian', name: 'vegetarian'},
        {title: 'Settings', name: 'settings'},
    ])

    let useFilter = (name) => {


    }

    useEffect(() => {
        // let userRecipes = shuffleArray(newRecipes.tsx)
        // let userRecipes = newRecipes.tsx
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)
    }, [])

    return (
        <div id={'filter'}>
            {filterItems.map((name, i) => {
                let itemTitle = filterItems[i] ? filterItems[i].title.toUpperCase() : 'NO TITLE'
                let hover = false
                return <div key={i}
                            className={'button ' + (hover ? 'hover' : '')}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}
                            onClick={() => {
                                useFilter(filterItems[i].name)
                                props.setFilter(filterItems[i].name)
                            }}>
                    <div className={'title'}>{itemTitle}</div>
                    {/*<img title={userRecipes[i].name} src={'./images/food/' + userRecipes[i].image}/>*/}
                </div>
            })}
        </div>
    )
}

export default Filter;