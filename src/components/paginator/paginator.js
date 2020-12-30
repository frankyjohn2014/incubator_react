import React, { useState } from 'react'
import styles from './paginator.module.css'

let Paginator = ({activePageProps,onPageChanged,pageUserCount,totalUserCount}) => {
    let pagesCount = Math.ceil(totalUserCount / pageUserCount)
    const pageFilter = 10
    let pages = []
    for (let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }
    let [activePage, setActivePage] = useState(1)
    let filterPageSize = Math.ceil(pagesCount/pageFilter)
    let leftPages = (activePage - 1) * pageFilter + 1
    let rightPages = activePage * pageFilter

    return (
        <div className={styles.paginator}>
            {activePage > 1 && <button 
            onClick={()=> {setActivePage(activePage-1)}}>Left</button>} 
            <div className={styles}>
                {pages.filter(p => p>=leftPages && p <= rightPages).map(p => {
                    return <span className={activePageProps === p && styles.activePage} onClick={(e) => {onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {filterPageSize > activePage && <button onClick={()=> {setActivePage(activePage+1)}}>Right</button>}
        </div>
    )
}

export default Paginator