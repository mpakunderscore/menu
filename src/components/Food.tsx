import React, {useState, useEffect, useReducer, useRef} from "react";
import {recipes} from "../data/recipes";
import '../css/food.css'


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
        let userRecipes = shuffleArray(recipes)
        // let userRecipes = recipes
        console.log(userRecipes.length)
        // userRecipes.unshift({name: 'FAVORITES', image: '', ingredients: [], instructions: [], hints: []})
        setUserRecipes(userRecipes)
    }, [])

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