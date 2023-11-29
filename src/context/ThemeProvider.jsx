import React, { useContext, useState } from 'react'
import { changeCssVariable } from '@services/changeCssVariables'
const ThemeContext = React.createContext()

export const THEME_DARK = 'dark' 
export const THEME_DEFAULT = 'default' 
export const THEME_LIGHT = 'light' 

export const ThemeProvider = ({children, ...props}) => {
    const [theme, setTheme] = useState(null)
    
    const change = (name) => {
        setTheme(name)
        changeCssVariable(name)
    }
    
    return (
        <ThemeContext.Provider
            value = {{
                theme, 
                change
            }}

            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)