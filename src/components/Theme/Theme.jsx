import { useState } from 'react'
import iconTheme from './img/theme-icon.png'
import styles from './Theme.module.css'
import ThemeSettings from './ThemeSettings'

const Theme = () => {
    const [openThemeSettings, setOpenThemeSettings] = useState(false)
    
    const handleOpenThemeSettings = () => {
        setOpenThemeSettings(prevState => !prevState)
    }

    return (
        <div className={styles.container}>
            <img 
                className = {styles.img} 
                src={iconTheme} 
                alt="theme" 
                onClick = {handleOpenThemeSettings}
            />

            {openThemeSettings ? (<ThemeSettings setOpenThemeSettings = {setOpenThemeSettings}/>): ''}
        </div>
    )
}

export default Theme