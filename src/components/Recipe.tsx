import {items} from "../data/items";
import React from "react";
import {recipes} from "../data/recipes";

const Recipe = (props) => {

    return (
        <div id={'recipe'}>
            <div className={'title'}>{props.currentRecipe.toUpperCase()}</div>
            <div className={'text'}>{recipes[props.currentRecipe]}</div>
            <div className={'close'} onClick={() => props.setCurrentRecipe(null)}>CLOSE</div>
        </div>

    )

}

export default Recipe;