import styles from './ThemeSettings.module.css'

import { useTheme, THEME_DARK, THEME_LIGHT, THEME_DEFAULT} from '@context/ThemeProvider'

const ThemeSettings = ({setOpenThemeSettings}) => {
    const isTheme = useTheme()
    const handleChangeColor = (theme) => {
        isTheme.change(theme)
        setOpenThemeSettings((prevState) => !prevState)
    }
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li onClick = {() => handleChangeColor(THEME_DARK)}>Dark Theme</li>
                <li onClick = {() => handleChangeColor(THEME_LIGHT)}>Light Theme</li>
                <li onClick = {() => handleChangeColor(THEME_DEFAULT)}>Default Theme</li>
            </ul>
        </div>
    )
}

export default ThemeSettings 