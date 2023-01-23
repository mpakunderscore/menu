import {items} from "../data/items";
import React from "react";
import {recipes} from "../data/recipes";

const Recipe = (props) => {

    let recipe = props.currentRecipe
    let title = recipe.name.toUpperCase()

    return (
        <div id={'recipe'}>
            <div className={'image'}>
                <img title={title} src={'./images/food/' + recipe.image}/>
            </div>
            <div className={'block'}>
                <div className={'title'}>{title}</div>
                <div className={'text'}>

                    <div className={'title-small'}>INGREDIENTS</div>
                    <div className={'ingredients'}>
                        {props.currentRecipe.ingredients.map((item, i) => {return <div key={i}>{item.name}</div>})}
                    </div>

                    <div className={'title-small'}>INSTRUCTIONS</div>
                    <div className={'instructions'}>
                        {props.currentRecipe.instructions.map(item => {return <div key={item}>{item}</div>})}
                    </div>

                    <div className={'title-small'}>HINTS</div>
                    <div className={'hints'}>
                        {props.currentRecipe.hints.map(item => {return <div key={item}>{item}</div>})}
                    </div>

                </div>
            </div>
            <div className={'close'} onClick={() => props.setCurrentRecipe(null)}>CLOSE</div>
        </div>
    )
}

export default Recipe;