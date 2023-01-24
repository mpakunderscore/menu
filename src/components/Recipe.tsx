import React, {useEffect, useState} from "react";
import {recipes} from "../data/recipes";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Recipe = (props) => {

    let recipe = props.currentRecipe
    let title = recipe.name.toUpperCase()

    let [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])

    return (
        <div id={'recipe'}>
            <div className={'image ' +  + (active ? 'active' : '')}>
                <img title={title} src={'./images/food/' + recipe.image}/>
            </div>
            <div className={'block ' + (active ? 'active' : '')}>
                <div className={'title'}>{title}</div>
                <div className={'text'}>

                    <div className={'title-small'}>INGREDIENTS</div>
                    <div className={'ingredients'}>
                        {props.currentRecipe.ingredients.map((item, i) => {
                            return <div key={i}>
                                <div>{capitalizeFirstLetter(item.name)}</div>
                                <div>{item.quantity}</div>
                            </div>
                        })}
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