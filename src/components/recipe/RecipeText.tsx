import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import '../../css/recipe.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const RecipeText = (props) => {

    // let [userRecipes, setUserRecipes] = useState([])
    let [menuState, setMenuState] = useState(0)

    useEffect(() => {
    }, [])

    let [checked, setChecked] = useState({})

    let updateInstructions = (text) => {
        // text = text.replace('minutes', '⏱️ minutes')
        // text = text.replace('hours', '⏱️ hours')
        return <div>{text}</div>
    }

    let clickInstruction = () => {

    }

    return (
        <div className={'text'}>

            <div className={'title-small'}>INGREDIENTS</div>
            <div className={'ingredients'}>
                {props.currentRecipe.ingredients.map((item, i) => {
                    return <div key={i}>
                        <div>{item.quantity}</div>
                        <div className={checked[i] ? 'bold' : ''}
                             onClick={() => {
                                 checked[i] = !checked[i]
                                 setChecked({...checked})
                             }}>{capitalizeFirstLetter(item.name)}<span>{checked[i] ? ' ✓' : ''}</span></div>
                    </div>
                })}
            </div>

            <div className={'title-small'}>INSTRUCTIONS</div>
            <div className={'instructions'}>
                {props.currentRecipe.instructions.map((item, i) => {
                    return <div key={item} onClick={() => clickInstruction()}>{
                        (i + 1) + '. ' +
                        updateInstructions(item)
                    }</div>
                })}
            </div>

            <div className={'title-small'}>HINTS</div>
            <div className={'hints'}>
                {props.currentRecipe.hints.map(item => {return <div key={item}>{item}</div>})}
            </div>

        </div>
    )
}

export default RecipeText;