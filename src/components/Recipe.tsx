import React, {useEffect, useState} from "react";
import '../css/recipe.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Recipe = (props) => {

    let recipe = props.currentRecipe
    let title = recipe.name.toUpperCase()

    let [active, setActive] = useState(false)

    let [checked, setChecked] = useState({})

    useEffect(() => {
        setActive(true)
    }, [])

    useEffect(() => {
    }, [checked])

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
                            return <div key={item}>{(i + 1) + '. ' + item}</div>
                        })}
                    </div>

                    <div className={'title-small'}>HINTS</div>
                    <div className={'hints'}>
                        {props.currentRecipe.hints.map(item => {return <div key={item}>{item}</div>})}
                    </div>

                </div>
            </div>
            <div className={'buttons'}>
                {Object.keys(checked).length > 0 && <div className={'shop-list'} onClick={() => shareList()}>SAVE</div>}
                <div className={'close'} onClick={() => props.setCurrentRecipe(null)}>CLOSE</div>
            </div>

        </div>
    )
}

export default Recipe;