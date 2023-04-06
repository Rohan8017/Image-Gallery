import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

export default function Main({sortType, toggleDisplay, records, handleSortbySize, handleSortbyDate, setQuery }) {
    return (
        <div>
            <div className='image-sort-wrapper'>
                <div>
                    <input type='search' onChange={(e) => setQuery(e.target.value)} />
                    <AiOutlineSearch/>
                </div>
                <button onClick={handleSortbySize}>sort by Filesize {sortType.fileSize ==='ASC' ? '(Accending)' : '(Dcending)'}</button>
                <button onClick={handleSortbyDate}>Sort by Date {sortType.date ==='ASC' ? '(Accending)' : '(Dcending)'}</button>
            </div>
            
            <div className={toggleDisplay === 'grid' ? 'main-section-wrapper-grid' : 'main-section-wrapper-flex'}>
                {
                    records.map((image) => {
                        return (
                            <div key={image.id} className='image-div-wrapper'>
                                <img className={toggleDisplay === 'grid' ? 'image-wrapper-grid' : 'image-wrapper-flex'} src={image.src} alt=''/>
                                <p>Name :{image.name}</p>
                                <p>img Size :{image.fileSize}</p>
                                <p>Date Uploded:{image.date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
