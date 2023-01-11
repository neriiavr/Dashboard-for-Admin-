import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat:false,
    cart: false, 
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    // 2. then add the logic, the state of the app that the state will have 
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        /* StateContext.Provider has to have a value, value property is an object 
        whatever value pass through here, they all be
        pass through all of the components instead of all of the app, in this ex > test: "test" 
        we have to pass the state as well 
        the second most important thing about context is that you always return children 
        inside of it */
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                }}>
             {children}
        </StateContext.Provider>
    )
}
//How can we use this active menu inside of the sidebar or app components =
//It is simply a function that returns the call of useContext
//but we pass in which context do we want to use 
export const useStateContext = () => useContext (StateContext);