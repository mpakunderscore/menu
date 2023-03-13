let { Configuration, OpenAIApi } = require("openai")

// https://platform.openai.com/docs/api-reference/chat

let organisation = 'org-EIcBrDsXbg2uN1ZVXszkt4Wa'

let key = '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'

require('dotenv').config()

// console.log(key)

const configuration = new Configuration({
    organization: organisation,
    apiKey: key,
})

let getEngines = async () => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
    console.log(response.data)
}

// getEngines()

// let name = 'Chocolate Coconut Chia Pudding'
// let name = 'Beetroot and Goat Cheese Tart'
let name = 'Lemon Garlic Shrimp Skewers'

let text = 'Please generate me a recipe for ' + name + ' with hints in JSON format with this fields (name, ingredients (array of objects (name, amount)), hints (array of strings), instructions (array of strings))'
// let text = 'Hello'

let getText = async () => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        "model": 'gpt-3.5-turbo',
        "messages": [{"role": "user", "content": text}]
    })
    console.log(response.data.choices[0].message.role)
    console.log(response.data.choices[0].message.content)
}

// getText()

let getImage = async () => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        "prompt": name,
        "n": 1,
        "size": "512x512"
    })
    console.log(response.data.data[0])
    // console.log(response.data.choices[0].message.content)
}

getImage()