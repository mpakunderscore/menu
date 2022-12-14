import React, {useEffect, useState} from 'react';
import Food from './components/Food'

import './css/index.css'
import './css/elements.css'
import { StatusBar, Style } from '@capacitor/status-bar';
import {Capacitor} from "@capacitor/core";
// import serverTexts from "./data/texts"

let uuid = require("uuid");

// ['rus', 'ukr', 'eng']
console.warn(navigator.language)
console.warn(navigator.userAgent)

function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

let isIOS = iOS()

console.log(Capacitor.getPlatform())

declare var VERSION: string;
console.log(VERSION)

let standalone = false

// UUID String
let user = localStorage.getItem('user')
if (!user) {
    user = uuid.v4()
    localStorage.setItem('user', user)
}
// console.log(user)


function App() {

    let languages = ['eng','rus', 'ukr', 'bel', 'de']
    let [lang, setStateLang] = useState(languages[1])

    let langProps = {
        languages,
        lang,
        setLang: (name: string) => {
            console.warn('CHANGE LANGUAGE: ' + name)
            setStateLang(name)
            return {}
        }
    }

    let [screen, setScreen] = useState(0)

    let [deferredPrompt, setDeferredPrompt] = useState({
        prompt: () => {},
        userChoice: {outcome: ''}
    })

    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.warn('standalone')
        standalone = true
    }

    let initPWA = () => {

        // console.log('initPWA')

        window.addEventListener('beforeinstallprompt', (e) => {

            // console.log('beforeinstallprompt')
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            setDeferredPrompt(e)
            // Update UI notify the user they can install the PWA
            // showInstallPromotion();
            // Optionally, send analytics event that PWA install promo was shown.
            // console.log(`'beforeinstallprompt' event was fired.`);
        });
    }

    let installPWA = async () => {

        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const {outcome} = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
    }

    let changeScreen = async (i) => {
        setScreen(i)
    }

    // let [initKey, setInitKey] = useState()
    // TODO
    let initKey
    let setInitKey = (key) => {
        console.log(key)
    }

    // let setInitKey = (initKey) => {
    //     appInitKey = initKey
        // console.log(initKey)
    // }

    // let appInitKey

    useEffect(() => {
        initPWA()
    }, [])

    return (
        <div id={'app'} className={'shadow-big'}>
            <Food/>

        </div>
    );
}

export default App;