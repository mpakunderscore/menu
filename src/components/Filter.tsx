import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/filter.css'

const Filter = (props) => {

    const inputRef = useRef(null)

    let [filterItems, setFilterItems] = useState([
        // {title: 'Search', name: 'search', color: 'rgb(59,114,255)'},
        {title: 'Favorites', name: 'favorites', color: 'gold'},
        {title: 'Vegetarian', name: 'vegetarian', color: 'greenyellow'},
        {title: 'Easy', name: 'easy', color: 'lightgreen'},
        {title: 'Breakfast', name: 'breakfast', color: 'orange'},

        // {title: 'Cuisine', name: 'cuisine', color: 'red'},
        // {title: 'Week', name: 'week', color: 'dodgerblue'},
        // {title: 'Settings', name: 'settings', color: 'black'},

        {title: 'Generate', name: 'about', color: 'red'},
    ])

    let useFilter = (name) => {

        props.setFilter(name)

        if (name === 'favorites') {
            // props.setIsFilter(false)
        }

        if (name === 'search') {
            // inputRef.current.focus()
        }
    }

    // let [searchText, setSearchText] = useState(props.searchText)

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
            <input ref={inputRef}
                                                // autoFocus={true}
                                                className={'search'}
                                                placeholder={'SEARCH'}
                                                value={props.searchText}
                                                onChange={e => {
                                                    console.log(e.target.value)
                                                    props.setSearchText(e.target.value)
                                                }}
            />

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