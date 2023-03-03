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

declare var VERSION: string;

const Food = (props) => {

    let [userRecipes, setUserRecipes] = useState([])

    useEffect(() => {

        recipes.map((recipe, i) => {
            console.log(recipe.name)
            recipe['tags'] = listTags.find(item => item.recipe === recipe.name).tags
        })

        let userRecipes = shuffleArray(recipes)
        // let userRecipes = recipes
        console.log(userRecipes.length)
        console.log(userRecipes)
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

        if (Object.keys(props.whiteList).length !== 0 && props.filterState.favorites) {
            userRecipes = userRecipes.filter(recipe => {
                // console.log(recipe.id)
                return props.whiteList.hasOwnProperty(recipe.id)
            })
            // console.log(props.whiteList)
        }

        setUserRecipes(userRecipes)

    }, [props.whiteList])

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