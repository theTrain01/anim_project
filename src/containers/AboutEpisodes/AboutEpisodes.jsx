import { useEffect, useState } from 'react'

import { getApiResourse } from '@utils/network'
import { URL_GET_EPISODES } from '@constants/api'

import AboutEpisode from '@components/AboutEpisode'
import Pagination from '@components/Pagination'

import styles from './AboutEpisodes.module.css'

const AboutEpisodes = () => {
    const [animApisodes, setAnimEpisodes] = useState([]) 
    const [errorApi, setErrorApi] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [episodePerPage] = useState(10)

    const indexOfLastEpisode = currentPage * episodePerPage
    const indexOfFirstEpisode = indexOfLastEpisode - episodePerPage

    const currentEpisodes = animApisodes.slice(indexOfFirstEpisode, indexOfLastEpisode)

    const getResponse = async(url) => {
        const res = await getApiResourse(url)

        if (res) {
            const epidosodeList = res.data.map((item) => {
                return {
                    id: item.mal_id,
                    title: item.title, 
                    url: item.forum_url
                }
            }) 

            setErrorApi(false)
            setAnimEpisodes(epidosodeList)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResponse(URL_GET_EPISODES)
    }, [])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    } 

    return (
        <>
            <h1 className='header_text'>About episodes</h1>

            {errorApi ? <h2>Error</h2> : (
                <div>
                    <Pagination 
                        total = {animApisodes.length} 
                        PerPage = {episodePerPage}
                        paginate = {paginate}
                    />
                    <AboutEpisode 
                        currentEpisodes = {currentEpisodes} 
                    />
                </div>
            )}
        </>
    )
}

export default AboutEpisodes