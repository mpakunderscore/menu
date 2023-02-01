import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/header.css'

const Header = (props) => {

    // let [userRecipes, setUserRecipes] = useState([])
    let [menuState, setMenuState] = useState(1)
    let [oldScroll, setOldScroll] = useState(0)

    const [direction, setDirection] = useState('up');

    const controlDirection = () => {
        let height = document.querySelector('#app').scrollTop
        console.log(height)
        if (oldScroll > height) {
            console.log(oldScroll)
            setMenuState(1)
        } else {
            setMenuState(2)
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
            <span>SORT</span>
            AMENU
            <span>0.3.3</span>
        </div>
    )
}

export default Header;