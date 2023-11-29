import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import moment from 'moment'

import { getApiResourse } from '@utils/network'
import { URL_GET_EPISODES } from '@constants/api'

import PersonLinkBack from '@components/PersonPage/PersonLinkBack'

import images from './img/berserk.jpg'

import styles from './AboutEpisodesInfo.module.css'

const AboutEpisodesInfo = () => {
    const [episodeInfo, setEpisodeInfo] = useState([])
    const [episodeName, setEpisodeName] = useState('')
    const id = useParams().id

    useEffect(() => {
        (async() => {
            const res = await getApiResourse(`${URL_GET_EPISODES}/${id}`)
            if (res) {
                const dataEpisode = res.data
                setEpisodeInfo([
                    {
                        id: dataEpisode.mal_id,
                        description: dataEpisode.synopsis,
                        title: dataEpisode.title,
                        url: dataEpisode.url, 
                        date: dataEpisode.aired
                    }
                ])

                setEpisodeName(dataEpisode.title)
            }
        })()
    })

    return (
        <div className={styles.container}>
            <h1 className='header__text'>{episodeName}</h1>

            <div className={styles.episode__box}>
                <PersonLinkBack/>
                
                {episodeInfo.map(({id, description, date}) => (
                    <div 
                        key = {id}
                        className={styles.box__item}
                    >
                        <div className={styles.rate__box}>
                            <img src={images} alt="img" />
                            <button className={styles.rate__button}>Rate the series</button>
                        </div>
                        
                        <div className={styles.description}>
                            <p className={styles.episode__number}>Episode {id}</p>
                            <p>
                                {description.replace('(Source: Wikipedia)', '')}
                            </p>

                            <p className={styles.date}>Year of release : {moment(date).format('DD.MM.YYYY')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default AboutEpisodesInfo