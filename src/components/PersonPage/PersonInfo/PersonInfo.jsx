import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { URL_GET_PERSON } from '@constants/api'
import { idPerson } from '@utils/network'

import { getApiResourse } from '@utils/network'

import PersonNicknames from './PersonNicknames/PersonNicknames'
import PersonLinkBack from '../PersonLinkBack/PersonLinkBack'
import TextAnimation from './TextAnimation'

import styles from './PersonInfo.module.css'


const PersonInfo = () => {
    const [personInfo, setPersonInfo] = useState([])
    const [personName, setPersonName] = useState('')
    const [personImages, setPersoImages] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(`${URL_GET_PERSON}/${idPerson(id)}`)

            if (res) {
                const dataPerson = res.data

                setPersonInfo([
                    {   about: dataPerson.about, 
                        name: dataPerson.name, 
                        nicknames: dataPerson.nicknames,
                        index: dataPerson.mal_id
                    },
                ])

                setPersonName(dataPerson.name)
                setPersoImages(dataPerson.images.jpg.image_url)
            }

        })()
    }, [])

    return (
        <>
            <div className={styles.container}>
                {personName.length ? (
                    <h1 className='header_text'>
                        <span>{personName}</span> character
                    </h1>
                ) : ''}
                
                <div className={styles.person__container}>
                    <ul className={styles.person__list}>
                        <PersonLinkBack />

                        {personInfo.map(({about, index, nicknames}) => (
                            <li 
                                key = {index}
                                className={styles.person}
                            >
                                <div>
                                    <img 
                                        src={personImages} 
                                        alt='person' 
                                        className={styles.person__images}
                                    />
                                </div>

                                {about ? <div className={styles.text}><TextAnimation about = {about}/></div> : <h2>Not information</h2>}
                                
                                {nicknames.length ? (
                                    <div className={styles.block__nicknames}>
                                        <h3>Also known as</h3>
                                        <PersonNicknames nicknames={nicknames}/>
                                    </div>
                                ) : ''}
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PersonInfo

// {about ? <p>{about}</p> : <h2>Not information</h2>}
