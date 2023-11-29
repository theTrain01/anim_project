import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { useTheme } from '@context/ThemeProvider';

import backArrow from './img/back.png'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
    const navigate = useNavigate()
    const handleComeBack = (event) => {
        event.preventDefault()
        navigate(-1)
    }
    return (
        <>
            <div className={styles.container}>
                <a 
                    href="#!"
                    onClick={handleComeBack}
                >
                    <div className={styles.box}>
                        <img src={backArrow} alt="back" />
                        <p className={styles.dark}>Сome back</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default PersonLinkBack