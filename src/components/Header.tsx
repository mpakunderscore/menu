import React, {useState, useEffect, useReducer, useRef} from "react";
// import {items} from "../data/items";
import {inspect} from "util";
import {recipes} from "../data/recipes";
import '../css/menu.css'

const Header = (props) => {

    // let [userRecipes, setUserRecipes] = useState([])
    let [menuState, setMenuState] = useState(0)

    useEffect(() => {
    }, [])

    let clickMenu = () => {
        console.log('click menu')
        // setMenuState(1)
    }

    return (
        <div id={'food-title'} className={(menuState === 1 ? 'menu-open' : '')} onClick={() => clickMenu()}>
            <span>SORT</span>
            AMENU
            <span>0.3.3</span>
        </div>
    )
}

export default Header;