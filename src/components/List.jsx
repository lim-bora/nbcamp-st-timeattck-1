import React from 'react'
import ListItem from './ListItem'
import { useState } from 'react'

const List = ({country, onDelete , onUpdate}) => {
  return (
    <div className='List'>
        {country.map((data) => (
            <ListItem
                key={data.id}
                id={data.id}
                name={data.name}
                gold={data.gold}
                silver={data.silver}
                bronze={data.bronze}
                onDelete={onDelete}
                onUpdate={onUpdate}
            />
        ))}
    </div>
  )
}

export default List