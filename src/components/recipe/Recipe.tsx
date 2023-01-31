import React, {useEffect, useState} from "react";
import '../../css/recipe.css'
import RecipeText from "./RecipeText";

const Recipe = (props) => {

    let recipe = props.currentRecipe
    let title = recipe.name.toUpperCase()

    let [active, setActive] = useState(false)

    let [checked, setChecked] = useState({})

    useEffect(() => {
        setActive(true)
    }, [])

    // useEffect(() => {
    // }, [checked])

    let shareList = () => {

    }

    let [favorite, setFavorite] = useState(false)

    return (
        <div id={'recipe'}>
            <div className={'image ' +  + (active ? 'active' : '')}>
                <img title={title} src={'./images/food/' + recipe.image}/>
            </div>
            <div className={'block ' + (active ? 'active' : '')}>
                <div className={'title'}>
                    <div className={'text'}>
                    {title}
                    </div>
                    <div className={'buttons'}>
                        <span onClick={() => setFavorite(!favorite)} className={"material-symbols-outlined" + (favorite ? ' favorite' : '')}>favorite</span>
                    </div>
                </div>
                <RecipeText currentRecipe={recipe}/>
            </div>
            <div className={'buttons'}>
                {Object.keys(checked).length > 0 && <div className={'shop-list'} onClick={() => shareList()}>SAVE</div>}
                <div className={'close'} onClick={() => props.setCurrentRecipe(null)}>CLOSE</div>
            </div>

        </div>
    )
}

export default Recipe;