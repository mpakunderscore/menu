import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/header.css'

let appName = 'AMENU'
let action1 = 'FILTER'
let action2 = 'FRIDGE'

const Header = (props) => {

    // let [userRecipes, setUserRecipes] = useState([])

    let [menuState, setMenuState] = useState(1)

    let [oldScroll, setOldScroll] = useState(0)

    const [direction, setDirection] = useState('up');

    const controlDirection = () => {
        let height = document.querySelector('#app').scrollTop
        if (oldScroll > height) {
            setMenuState(1)
        } else {
            setMenuState(0)
        }
        setOldScroll(height)
    }

    useEffect(() => {
        document.querySelector('#app').addEventListener('scroll', function () {
            controlDirection();
        }, false);
    },[oldScroll]);

    let clickMenu = () => {
        console.log('click menu')
        if (menuState === 0) {
            setMenuState(1)

        } else if (props.isFilter) {
            // setMenuState(0)
        }
    }

    let clickAction1 = () => {
        if (menuState === 0 || !props.isFilter) {
            setMenuState(1)
            props.setIsFridge(false)
            props.setIsFilter(true)
        } else if (props.isFilter) {
            setMenuState(0)
            props.setIsFilter(false)
        }
    }

    let clickAction2 = () => {
        // console.log('ACTION 2')
        if (!props.isFridge) {
            props.setIsFilter(false)
            props.setIsFridge(true)
        } else
            props.setIsFridge(false)
    }

    return (
        <div id={'header'} className={((menuState === 1 || props.isFilter) && !props.isFridge ? 'open' : '')} onClick={() => clickMenu()}>
            <span className={(props.isFilter ? 'active' : '')} onClick={() => clickAction1()}>{action1}</span>
            {appName}
            <span className={(props.isFridge ? 'active' : '')} onClick={() => clickAction2()}>{action2}</span>
        </div>
    )
}

export default Header;