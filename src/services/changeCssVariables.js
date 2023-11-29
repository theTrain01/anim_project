export const changeCssVariable = (theme) => {
    const root = document.querySelector(':root')
    root.style.setProperty('background', `var(--theme-${theme}-bg)`)
}