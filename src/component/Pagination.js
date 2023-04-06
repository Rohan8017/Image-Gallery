import React from 'react'

export default function Pagination({Number,handlePrevpage,handleNextvpage,currentPage,nPage,setPage}) {
  return (
    <div>
      <ul>
        <li>
            <button onClick={handlePrevpage} disabled={currentPage === 1}>Prev</button>
        </li>
        {
            Number.map((n,i)=>{
                return (
                    <li key={i}>
                        <button className={ currentPage===n ? 'active' :''} onClick={()=>setPage(n)}>{n}</button>
                    </li>
                )
            })
        }
        <li>
            <button onClick={handleNextvpage} disabled={currentPage === nPage}>Next</button>
        </li>
      </ul>
    </div>
  )
}
