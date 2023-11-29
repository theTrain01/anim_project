import { NavLink } from 'react-router-dom';

import Theme from '@components/Theme';

import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/people'>Person</NavLink>
                    </li>

                    <li>
                        <NavLink to='/episodes'>About episodes</NavLink>
                    </li>
                </ul>

                <div className={styles.theme__box}>
                    <Theme />
                </div>
            </div>
        </>
    )
}

export default Header;