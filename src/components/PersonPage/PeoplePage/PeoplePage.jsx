import { Link } from 'react-router-dom'
import styles from './PeoplePage.module.css'

const PeoplePage = ({currentPerson}) => {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    {currentPerson.map(({id, name, person_img}) => (
                        <Link 
                            to = {`/people/person${id}`}
                            key = {id}
                        >
                            <li 
                                className={styles.person}
                            >
                                <img 
                                    src={person_img} 
                                    alt='images'
                                    className={styles.img__person}
                                />
                                    
                                <p>{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PeoplePage