import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/header.css'

const VERSION = '0.4.0'
let action = 'FILTER'

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
        setMenuState(1)
    }

    return (
        <div id={'header'} className={(menuState === 1 ? 'open' : '')} onClick={() => clickMenu()}>
            <span>{action}</span>
            AMENU
            <span>{VERSION}</span>
        </div>
    )
}

export default Header;