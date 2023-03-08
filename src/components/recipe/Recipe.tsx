import React, {useEffect, useState} from "react";
import '../../css/recipe.css'
import RecipeText from "./RecipeText";
import {names} from "../../utils/names";
import {getFavorite, setFavorites} from "../../utils/storage";
import {getData, sendData} from "../../utils/api";

const Recipe = (props) => {

    let recipe = props.currentRecipe
    let title = recipe.name.toUpperCase()

    let [favorite, setFavorite] = useState(getFavorite(recipe.id))

    let [active, setActive] = useState(false)
    let [checked, setChecked] = useState({})

    useEffect(() => {
        setActive(true)
    }, [])

    // useEffect(() => {
    // }, [checked])

    let shareList = () => {

    }

    let saveFavorites = async () => {
        console.log()
        setFavorite(!favorite)
        setFavorites(recipe.id, !favorite)
        await sendData('/api/like/', recipe)
    }

    return (
        <div id={'recipe'}>
            <div className={'image ' +  + (active ? 'active' : '')}>
                <img title={title} src={'./images/recipes/food/' + recipe.image.toLowerCase()}/>
            </div>
            <div className={'block ' + (active ? 'active' : '')}>
                <div className={'title'}>
                    <div className={'text'}>
                    {title}
                    </div>
                    <div className={'buttons'}>
                        <span onClick={() => saveFavorites()}
                              className={"material-symbols-outlined" + (favorite ? ' favorite' : '')}>favorite</span>
                    </div>
                </div>
                <div className={'tags'}>{recipe.tags.join(', ').toUpperCase() + ' ID:' + recipe.id}</div>
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