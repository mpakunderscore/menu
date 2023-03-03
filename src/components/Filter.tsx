import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/filter.css'

const Filter = (props) => {

    let [filterItems, setFilterItems] = useState([
        {title: 'Favorites', name: 'favorites', color: 'gold'},
        {title: 'Vegetarian', name: 'vegetarian', color: 'greenyellow'},
        {title: 'Breakfast', name: 'breakfast', color: 'orange'},
        {title: 'Easy', name: 'easy', color: 'lightgreen'},
        // {title: 'Cuisine', name: 'cuisine', color: 'red'},
        // {title: 'Week', name: 'week', color: 'dodgerblue'},
        // {title: 'Settings', name: 'settings', color: 'black'},
        // {title: 'About', name: 'about', color: 'black'},
    ])

    let useFilter = (name) => {

        props.setFilter(name)
        if (name === 'favorites') {
            props.setIsFilter(false)
        }

        if (name === 'easy') {

        }
    }

    useEffect(() => {
        // let userRecipes = shuffleArray(newRecipes.tsx)
        // let userRecipes = newRecipes.tsx
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)
    }, [])

    // console.log(filterItems.map(item => item['name']))

    return (
        <div id={'filter'}>
            {filterItems.map((item, i) => {
                let itemTitle = filterItems[i] ? filterItems[i].title.toUpperCase() : 'NO TITLE'
                let hover = false
                return <div key={i}
                            className={'button ' +
                                (hover ? 'hover ' : '') +
                                (props.filterState[filterItems[i].name] === true ? 'selected' : '')}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}
                            onClick={() => {
                                useFilter(filterItems[i].name)
                            }}>
                    <div className={'title'}
                         style={{color: (props.filterState[filterItems[i].name] !== true ? '' : filterItems[i].color)}}>{itemTitle}</div>
                    {/*<img title={userRecipes[i].name} src={'./images/food/' + userRecipes[i].image}/>*/}
                </div>
            })}
        </div>
    )
}

export default Filter;