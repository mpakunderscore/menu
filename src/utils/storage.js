import {names} from "./names";

const setItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}

const getItem = (name) => {
    return JSON.parse(localStorage.getItem(name) || '{}')
}

export let setFavorites = (id, value) => {
    let favorites = getItem(names.FAVORITES)
    favorites[id] = value
    setItem(names.FAVORITES, {...favorites})
}

export let getFavorite = (id) => {
    return getItem(names.FAVORITES)[id]
}

export let getFavorites = () => {
    return getItem(names.FAVORITES)
}

export let setIngredient = (id, value) => {
    let favorites = getItem(names.INGREDIENTS)
    favorites[id] = value
    setItem(names.INGREDIENTS, {...favorites})
}

export let getIngredients = () => {
    // console.log(getItem(names.INGREDIENTS))
    return getItem(names.INGREDIENTS)
}