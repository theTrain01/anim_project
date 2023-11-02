import { useEffect, useState } from 'react'

import { URL_CHARACTERS } from '@constants/api'

import { getApiResourse } from '@utils/network'

import PeoplePage from '@components/PersonPage/PeoplePage'
import Pagination from '@components/Pagination'

import styles from './PersonPage.module.css'

const PersonPage = () => {
    const [person, setPerson] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [personPerPage] = useState(10)
    const [errorApi, setErrorApi] = useState(false)

    const indexOfLastPerson = currentPage * personPerPage
    const indexOfFirstPerson = indexOfLastPerson - personPerPage

    const currentPerson = person.slice(indexOfFirstPerson, indexOfLastPerson)

    const getResponse = async (url) => {

        const res = await getApiResourse(url)
        
        if (res) {
            const peopleList =  res.data.map(({character}) => {
                return {
                    name: character.name,
                    id: character.mal_id,
                    url: character.url,
                    person_img: character.images.jpg.image_url
                }
            })

            setPerson(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
        
    }

    useEffect(() => {
        getResponse(URL_CHARACTERS)
    }, [])


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    } 

    return (
        <>
            <h1 className='header_text'>Сharacters</h1>
            {
                errorApi ? <h2>Error</h2> 
                : (
                    <>
                        <Pagination 
                            totalPerson = {person.length} 
                            personPerPage = {personPerPage}
                            paginate = {paginate}
                        />
                        <PeoplePage 
                            currentPerson = {currentPerson}
                        />
                    </>
                )
            }
            
            
        </>
    )
}

export default PersonPage;