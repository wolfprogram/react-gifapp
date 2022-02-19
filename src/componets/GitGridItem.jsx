import React from 'react'

export default function GitGridItem({id, title, url}) {

    // console.log(id, title, url);
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
        <p>{ id }</p>

    </div>
    
  )
}

