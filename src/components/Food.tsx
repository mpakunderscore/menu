import React, {useState, useEffect, useReducer, useRef} from "react";
import {recipes} from "../data/recipes";
import '../css/food.css'
import {listTags} from "../data/tags";


const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

const orderArray = array => {

    return array.sort((a, b) => b['likes'] - a['likes']).filter(item => item.likes > 0)
}

declare var VERSION: string;

const Food = (props) => {

    let [userRecipes, setUserRecipes] = useState([])

    useEffect(() => {

        recipes.map((recipe, i) => {
            // console.log(recipe.name)

            recipe['tags'] = listTags.find(item => item.recipe === recipe.name).tags

            recipe['likes'] = 5

            if (recipe.instructions.length === 0 || typeof recipe.instructions[0] !== 'string') {
                // console.error('RECIPE ERROR')
                // console.warn(recipe.name)
                console.warn(recipe.id)

                recipe['likes'] = -1
            }

            if (recipe.id < 22) {
                recipe['likes'] = 2
            }
        })

        // console.log(recipes)

        // TODO
        // let userRecipes = shuffleArray(recipes)
        let userRecipes = orderArray(recipes)

        // console.log(userRecipes)

        // console.log(userRecipes.length)
        // console.log(userRecipes)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})

        if (props.filterState.easy) {
            userRecipes = userRecipes.filter(recipe => {
                return recipe.tags.includes('easy')
            })
        }

        if (props.filterState.vegetarian) {
            userRecipes = userRecipes.filter(recipe => {
                return recipe.tags.includes('vegetarian')
            })
        }

        if (props.filterState.breakfast) {
            userRecipes = userRecipes.filter(recipe => {
                return recipe.tags.includes('breakfast')
            })
        }

        if (props.searchText) {
            console.log(props.searchText)
            userRecipes = userRecipes.filter(recipe => {
                return recipe.name.toLowerCase().includes(props.searchText.toLowerCase())
            })
        }

        if (props.filterState.favorites) {
            userRecipes = userRecipes.filter(recipe => {
                return props.whiteList.hasOwnProperty(recipe.id)
            })
        }

        setUserRecipes(userRecipes)

    }, [props.filterState, props.whiteList, props.searchText])

    return (
        <div id={'food'}>
            {userRecipes.map((recipe, i) => {
                let itemTitle = userRecipes[i] ? userRecipes[i].name.toUpperCase() : 'NO TITLE'
                let hover = false
                return <div key={i}
                            className={hover ? 'hover' : ''}
                            onTouchStart={() => hover = true}
                            onTouchEnd={() => hover = false}
                            onClick={() => props.setCurrentRecipe(userRecipes[i])}>
                    <div className={'title'}>{itemTitle}</div>
                    <img loading="lazy" title={userRecipes[i].name} src={'./images/recipes/food/' + userRecipes[i].image.toLowerCase()} alt={''}/>
                </div>
            })}
            <div id={'version'}>
                <div>{VERSION}</div>
            </div>
        </div>
    )
}

export default Food;