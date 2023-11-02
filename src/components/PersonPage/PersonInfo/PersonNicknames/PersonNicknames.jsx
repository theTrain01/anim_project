import styles from './PersonNicknames.module.css'

const PersonNicknames = ({nicknames}) => {
    
    return (
        <div className={styles.container}>
            <ul className={styles.nick__list}>
                {nicknames.map((nick)=> (
                    <li 
                        key = {nick}
                        className={styles.nick}
                    >
                        {nick}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PersonNicknames