import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import '../../css/recipe.css'
import RecipeTimer from "./RecipeTimer";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const RecipeText = (props) => {

    let [checked, setChecked] = useState({})

    let [isTimer, setIsTimer] = useState(false)
    let [timerMinutes, setTimerMinutes] = useState(0)

    useEffect(() => {
    }, [])

    let runTimer = (i, minutes) => {
        console.log(minutes)
        setIsTimer(i)
        setTimerMinutes(minutes)
        // initTimer()
    }

    let closeTimer = () => {
        setIsTimer(false)
    }

    let updateInstructions = (text, i) => {
        text = text.replaceAll('minute ', '⏱️ minute ')
        text = text.replaceAll('minutes', '⏱️ minutes')
        // text = text.replaceAll('hour ', '⏱️ hour ')
        // text = text.replaceAll('hours', '⏱️ hours')

        let isHereTimer = false
        let minutes = '0'
        if (text.includes('⏱')) {
            isHereTimer = true
            const left = text.split('⏱')
            minutes = left[0].split(' ')[left[0].split(' ').length - 2]
            if (minutes.includes('-'))
                minutes = minutes.split('-')[1]
        }

        return <div>
            <div onClick={isHereTimer ? () => runTimer(i, minutes) : null}>{(i + 1) + '. ' + text}</div>
            {isHereTimer ? isTimer === i && <RecipeTimer timerMinutes={timerMinutes} closeTimer={closeTimer}/> : ''}
        </div>
    }

    let clickInstruction = () => {}

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
                        updateInstructions(item, i)
                    }</div>
                })}
            </div>

            <div className={'title-small'}>HINTS</div>
            <div className={'hints'}>
                {props.currentRecipe.hints.map(item => {return <div key={item}>{item}</div>})}
            </div>

            {/*<div className={'title-small'}>STORY</div>*/}
            {/*<div className={'story'}>*/}
            {/*    <div>{props.currentRecipe.story}</div>*/}
            {/*</div>*/}

            {/*<div className={'title-small'}>COMMENTS</div>*/}
            {/*<div className={'comments'}>*/}
            {/*    <div>{'This apple pie recipe looks delicious! With a flaky crust and a sweet and cinnamon-spiced filling, it\'s sure to be a hit at any gathering. The addition of a crumble topping takes it to the next level, adding a crunchy texture that complements the soft and juicy apples. I would recommend giving this recipe a try if you\'re looking for a classic dessert that never disappoints.'}</div>*/}
            {/*</div>*/}

        </div>
    )
}

export default RecipeText;