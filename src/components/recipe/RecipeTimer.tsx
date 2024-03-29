import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import '../../css/recipe.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const RecipeTimer = (props) => {
    let setString = (seconds) => {
        return Math.floor(seconds / 60) + ':' + ((seconds % 60) < 10 ? '0' + (seconds % 60) : (seconds % 60))
    }

    let [initSeconds, setInitSeconds] = useState(props.timerMinutes * 60)
    let [seconds, setSeconds] = useState(props.timerMinutes * 60)
    let [timerString, setTimerString] = useState(setString(props.timerMinutes * 60))

    let currentTimer = useRef(null)

    let initTimer = () => {
        clearInterval(currentTimer.current)
        currentTimer.current = setInterval(() => {
            seconds = seconds - 1
            setSeconds(seconds)
            // console.log(seconds)
            setTimerString(setString(seconds))

            if (seconds <= 0) {
                // console.log('CANCEL')
                clearInterval(currentTimer.current)
            }

        }, 1000)
    }

    // props.initTimer = initTimer

    useEffect(() => {
        initTimer()
        return () => {
            clearInterval(currentTimer.current)
        }
    }, [])

    return (
        <div className={'timer'}>
            <span onClick={() => props.closeTimer(false)}
                  className={"material-symbols-outlined"}>close</span>
            <div>{timerString}</div>
            <span onClick={() => {
                setSeconds(initSeconds)
                setTimerString(setString(initSeconds))
                initTimer()
            }}
                  className={"material-symbols-outlined"}>restart_alt</span>
        </div>
    )
}

export default RecipeTimer;