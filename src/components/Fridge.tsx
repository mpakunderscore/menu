import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/fridge.css'
import {colors, getSortedIngredients, ingredientsObjects} from "../data/ingredients";
import {getIngredients, setIngredient} from "../utils/storage";
import {ingredientsType} from "../data/types";
import {Haptics, ImpactStyle} from "@capacitor/haptics";

const fridgeText = 'Select ingredients you have for a new recipes'
// const fridgeText = 'Select ingredients for a new recipes'

let NEWBIE_FILTER = 5
let COOK_FILTER = 3

let COOK_ITEMS = 42

const Fridge = (props) => {

    window.scrollTo(0, 0);

    let [ingredients, setIngredients] = useState([])
    let [ingredientsActive, setIngredientsActive] = useState(getIngredients())



    let [ingredientsByType, setIngredientsByType] = useState({})
    let [types, setTypes] = useState([])

    // TODO
    let [filterCount, setFilterCount] = useState(NEWBIE_FILTER)

    let [ingredientsCount, setIngredientsCount] = useState(0)
    let [userIngredientsCount, setUserIngredientsCount] = useState(0)

    useEffect(() => {

        let count = 0

        let sortedIngredients = {'NO TYPE': []}
        ingredientsObjects.filter(item => item.count > filterCount).map((item, i) => {

            let name = ingredientsObjects[i].name
                .split('(')[0]
                .split(',')[0]

            let type = ingredientsType[name]

            ingredientsObjects[i].name = name

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
            // console.log(sortedIngredients)



            // Object.entries(sortedIngredients)
            let sorted = Object.keys(sortedIngredients).sort(function(a,b) {
                return sortedIngredients[b].length - sortedIngredients[a].length
            })

            delete sorted[0]
            sorted.push('spice')

            // Object.entries()
            // console.log(sorted)
            setTypes(sorted)

            // console.log(sortedIngredients)
            let itemsLeft = []
            sortedIngredients['NO TYPE'].map(item => {
                itemsLeft.push(item.name)
            })


            // console.log(itemsLeft)

            count++
        })

        Object.keys(sortedIngredients).map(key => {
            if (sortedIngredients[key].length === 1) {
                delete sortedIngredients[key]
                count--
            }
        })

        setIngredientsCount(count)

        let spices = sortedIngredients['spice']
        console.log(spices)

        // let userRecipes = shuffleArray(newRecipes.tsx)
        // let userRecipes = newRecipes.tsx
        // console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        // setFilterItems(userRecipes)


        let userCount = Object.keys(ingredientsActive).filter(key => ingredientsActive[key] === true).length
        setUserIngredientsCount(userCount)

        console.log(userCount)
        console.log(filterCount)
        if (userCount >= COOK_ITEMS && filterCount !== COOK_FILTER) {
            console.log(COOK_FILTER)
            setFilterCount(COOK_FILTER)
        }

    }, [userIngredientsCount, filterCount, ingredientsCount])

    let clickIngredient = (name) => {

        haptics()
        console.log(name)
        ingredientsActive[name] = !ingredientsActive[name]
        setIngredient(name, ingredientsActive[name])
        setIngredientsActive({...ingredientsActive})
        // console.log(ingredientsActive)

        let userCount = Object.keys(ingredientsActive).filter(key => ingredientsActive[key] === true).length
        setUserIngredientsCount(userCount)
    }

    let haptics = () => {
        Haptics.impact({style: ImpactStyle.Medium})
        Haptics.vibrate()
        Haptics.selectionStart()
    }

    // console.log(Object.keys(ingredientsActive).filter(key => ingredientsActive[key] === true).length)

    // let userCount = Object.keys(ingredientsActive).filter(key => ingredientsActive[key] === true).length

    return (
        <div id={'fridge'}>

            <div className={'fridge-description'}>{fridgeText.toUpperCase()}</div>

            <div className={'fridge-score'}>
                <div>UNLOCKED: {userIngredientsCount + ' / ' + ingredientsCount}</div>
            </div>

            <div className={'fridge-settings'}>
                <div className={'active'}>ONE</div>
                <div className={userIngredientsCount >= 42 ? 'active' : ''}>TWO</div>
                <div>THREE</div>
            </div>

            {types.map((type) => {

                return <div key={type} className={'grid'}>

                    {/*<p style={{color: 'white', margin: '20px'}}>{'THIS PAGE IS UNDER DEVELOPMENT / INGREDIENT DATA COLLECTION'}</p>*/}

                    <span>{type.toUpperCase() + 'S'}</span>

                    {ingredientsByType[type] ? ingredientsByType[type].map((name, i) => {
                        let itemTitle = ingredientsByType[type][i] ? ingredientsByType[type][i].name.toUpperCase() : 'NO TITLE'
                        let hover = false
                        let active = ingredientsActive[ingredientsByType[type][i].name]
                        let color = colors[ingredientsByType[type][i].name] ? colors[ingredientsByType[type][i].name] : '#ffffff'
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