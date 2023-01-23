import {items} from "../data/items";
import React from "react";
import {recipes} from "../data/recipes";

const Recipe = (props) => {

    let title = props.currentRecipe.name.toUpperCase()

    return (
        <div id={'recipe'}>
            <div className={'title'}>{title}</div>
            <div className={'text'}></div>
            <div className={'close'} onClick={() => props.setCurrentRecipe(null)}>CLOSE</div>
        </div>
    )
}

export default Recipe;