import { useState } from 'react'

import images1 from './img/berserk_22.jpg'
import images2 from './img/berserk_23.jpg'
import images3 from './img/berserk_24.jpg'
import images4 from './img/berserk_25.jpg'

import styles from './AboutEpisode.module.css'
import { Link } from 'react-router-dom'

export const getRandomImage = () => {
    const imgArray = [images1, images2, images3, images4];
    const randomIndex = Math.floor(Math.random() * imgArray.length)

    return imgArray[randomIndex]
}

const AboutEpisode = ({currentEpisodes}) => {

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list__episodes}>
                    {currentEpisodes.map(({id, title, url}) => (
                        <Link 
                            to = {`/episodes/${id}`}
                            key = {id}
                        >
                            <li 
                                className={styles.episode}
                                
                                style={{ backgroundImage: `url(${getRandomImage()})` }}
                            >
                                <p className={styles.episode__title}>
                                    {title}
                                </p>

                                <button className={styles.button}>
                                    <a href={url}>Link to the forum</a>
                                </button>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AboutEpisode