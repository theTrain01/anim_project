import { useEffect, useState } from "react";

const TextAnimation = ({about}) => {
    const [displayText, setDisplayText] = useState('')
    useEffect(() => {
        let i = 0 

        const intervalId = setInterval(() => {
            setDisplayText(prevState => prevState += about[i] || '')
            i++

            if (i === about.length) {
                clearInterval(intervalId)
            }

            }, 50)

        return () => clearInterval(intervalId)
        
    }, [])

    return (
        <p>{displayText}</p>
    )
}

export default TextAnimation
