import {names} from "./names";

export let setItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}

export let getItem = (name) => {
    JSON.parse(localStorage.getItem(name))
}