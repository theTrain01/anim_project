import styles from './Pagination.module.css'

const Pagination = ({personPerPage, totalPerson, paginate}) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPerson / personPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list__paginate}>
                    {pageNumber.map((item, index) => (
                        <li 
                            className={styles.number} 
                            key = {index}
                            onClick={() => paginate(item)}
                        >
                            {item}
                        </li>
                    ))
                        
                    }
                </ul>
            </div>
        </>
    )
}

export default Pagination