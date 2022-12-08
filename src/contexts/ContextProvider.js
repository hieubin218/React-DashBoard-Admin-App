import React, { createContext, useContext, useState } from 'react';




const StateContext = createContext();

const initialState = {
    message: false,
    cart: false,
    userProfile: false,
notification: false,}

// React arrow function component with its prop has children property
export const ContextProvider = ({ children }) => {
    // the "activeMenu" will be "true" at the start
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    // Boolean value
    const [themeSettings,setThemeSettings] = useState(true);


    const setMode = (e) => {
        // the Mode we clicked on
        setCurrentMode(e.target.value);

        // Update local storage (User comes back, the same setting color is activated)
            // the item called 'themeMode' equal to target.value
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);  
    }

    const setColor = (color) => {
        // the Color we clicked on
        setCurrentColor(color);

        // Update local storage (User comes back, the same setting color is activated)
            // the item called 'themeMode' equal to target.value
        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }


    return (
        <StateContext.Provider
            // value property: values will be passed through all components of entire application
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,  
                handleClick,
                screenSize,
                setScreenSize,
                currentColor, currentMode,
                themeSettings, setThemeSettings,
                setColor, setMode
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

// Use export: to utilize the activeMenu inside the sidebar of app components
    // wrap the export StateContext inside the <App /> at index.js
export const useStateContext = () => useContext(StateContext);


// Value property:
    // if have the key and value of same value --> omit the latter
        // value = {{activeMenu: activeMenu}} --> value={{activeMenu,}}


// LINE 49:
    // Give me the data from ConText by using the ConText and specify its prop
