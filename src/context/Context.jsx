import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [previousPrompt, setPreviousPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [prompts, setPrompts] = useState(JSON.parse(localStorage.getItem('prompts')) || [])

    const savePrompt = (prompt) => {
        localStorage.setItem('prompts', JSON.stringify([...prompts, prompt]))
        setPrompts(prevPrompts => [...prevPrompts, prompt])
    }

    const search = async () => {
        setData("")
        setLoading(true)
        setRecentPrompt(input)
        const response = await run(input)
        const cleanedString = response.replace(/\*/g, "")
        setData(cleanedString)
        savePrompt(input)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        search,
        setRecentPrompt,
        recentPrompt,
        loading,
        data,
        input,
        setInput,
        prompts
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;