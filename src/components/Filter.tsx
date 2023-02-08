import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/filter.css'

const Filter = (props) => {

    let [filterItems, setFilterItems] = useState([
        {title: 'your Favorites', name: 'favorites'},
        {title: 'good Soup', name: 'soup'},
        {title: 'late Breakfast', name: 'breakfast'},
        {title: 'Easy make', name: 'easy'},
        {title: 'i want Dessert', name: 'dessert'},
        {title: 'is it Veg?', name: 'veg'},
    ])

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
                            className={hover ? 'hover' : ''}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}
                            onClick={() => props.setFilter(filterItems[i].name)}>
                    <div className={'title'}>{itemTitle}</div>
                    {/*<img title={userRecipes[i].name} src={'./images/food/' + userRecipes[i].image}/>*/}
                </div>
            })}
        </div>
    )
}

export default Filter;