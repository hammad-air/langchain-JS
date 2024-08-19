

import { ChatOpenAI } from "langchain/chat_models/openai";

const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
})

const response = await model.invoke("Hello")
console.log(response)